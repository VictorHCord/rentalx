import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository"
import { inject, injectable } from "tsyringe"
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string
}

@injectable()
class AuthenticationUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }
    const token = sign({}, "b8371eb11e07868ac71c593fc7ea5268", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user,
      token,
    }
  }
}

export {AuthenticationUserUseCase}
