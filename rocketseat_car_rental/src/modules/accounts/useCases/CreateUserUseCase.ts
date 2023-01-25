import { IUsersRepository } from "../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyexists = await this.usersRepository.findByEmail(email);

    if (userAlreadyexists) {
      throw new Error("User Already exists");
    }
    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
