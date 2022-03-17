import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash
    })
  }
}

export { CreateUserUseCase }
