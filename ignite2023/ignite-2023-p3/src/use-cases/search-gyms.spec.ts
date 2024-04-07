import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { SearchGymsUseCase } from "./search-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymsUseCase;

describe("Fetch Check-in History Use Case", () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new SearchGymsUseCase(gymsRepository);
  });

  it("should be able to search for gyms", async () => {
    await gymsRepository.create({
      title: "js gym",
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    await gymsRepository.create({
      title: "ts gym",
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    const gyms = await sut.execute({
      query: "js",
      page: 1,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([
      expect.objectContaining({ gym_id: "gym-01" }),
      expect.objectContaining({ gym_id: "gym-02" }),
    ]);
  });
});
