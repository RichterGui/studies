import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { GymsRepository } from "@/repositories/gyms-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found";
import { getDistanceBetweenCordinates } from "@/utils/get-distance-between-cordinates";
import { MaxNumberOfCheckInsError } from "./errors/max-number-of-check-ins";
import { MaxDistanceError } from "./errors/max-distance-error";
import dayjs from "dayjs";

interface ValidateCheckInUseCaseRequest {
  checkInId: string;
}

interface ValidateCheckInUseCaseResponse {
  checkIn: CheckIn;
}

export class ValidateCheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    checkInId,
  }: ValidateCheckInUseCaseRequest): Promise<ValidateCheckInUseCaseResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId);

    if (!checkIn) {
      throw new ResourceNotFoundError();
    }

    const distanceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.created_at,
      "minute"
    );

    if (distanceInMinutesFromCheckInCreation > 20) {
      throw new Error();
    }

    checkIn.validated_at = new Date();

    await this.checkInsRepository.save(checkIn);
    return {
      checkIn,
    };
  }
}
