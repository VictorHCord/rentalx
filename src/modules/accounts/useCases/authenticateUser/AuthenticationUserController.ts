import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticationUserUseCase } from "./AuthenticationUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { password, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticationUserUseCase)

    const authInfo = await authenticateUserUseCase.execute({ password, email });

    return response.json(authInfo);
  }
}
export { AuthenticateUserController }
