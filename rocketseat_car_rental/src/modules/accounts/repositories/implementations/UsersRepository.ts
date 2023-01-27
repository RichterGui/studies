import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
  async create({
    name,
    username,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
