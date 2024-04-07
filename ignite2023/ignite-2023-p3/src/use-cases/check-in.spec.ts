import { expect, describe, it, beforeEach, vi, afterEach } from "vitest";
import { RegisterUseCase } from "./register";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { CheckInUseCase } from "./check-in";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { Decimal } from "@prisma/client/runtime/library";
import { MaxDistanceError } from "./errors/max-distance-error";
import { MaxNumberOfCheckInsError } from "./errors/max-number-of-check-ins";

let checkInsRepository: InMemoryCheckInsRepository;
let gymsRepository: InMemoryGymsRepository;
let sut: CheckInUseCase;

describe("Check-in Use Case", () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    gymsRepository = new InMemoryGymsRepository();
    sut = new CheckInUseCase(checkInsRepository, gymsRepository);

    gymsRepository.create({
      id: "gym-01",
      title: "javascript gym",
      description: "hello world",
      phone: "999999999",
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it("should be able to check in", async () => {
    const { checkIn } = await sut.execute({
      gymId: "gym01",
      userId: "user01",
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
  it("should not be able to check in twice in the same day", async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0));

    await sut.execute({
      gymId: "gym01",
      userId: "user01",
      userLatitude: 0,
      userLongitude: 0,
    });

    await expect(() =>
      sut.execute({
        gymId: "gym01",
        userId: "user01",
        userLatitude: 0,
        userLongitude: 0,
      })
    ).rejects.toBeInstanceOf(MaxNumberOfCheckInsError);
  });

  it("should be able to check in twice but in different days", async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0));

    await sut.execute({
      gymId: "gym01",
      userId: "user01",
      userLatitude: 0,
      userLongitude: 0,
    });
    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0));

    const { checkIn } = await sut.execute({
      gymId: "gym01",
      userId: "user01",
      userLatitude: 0,
      userLongitude: 0,
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
});

it("shouldn't be able to check in on a distant gym", async () => {
  gymsRepository.items.push({
    id: "gym-02",
    title: "JavaScript Gym",
    description: "",
    phone: "",
    latitude: new Decimal(-27.0747379),
    longitude: new Decimal(-49.4889672),
  });

  await expect(() =>
    sut.execute({
      gymId: "gym-02",
      userId: "user-01",
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    })
  ).rejects.toBeInstanceOf(MaxDistanceError);
});
