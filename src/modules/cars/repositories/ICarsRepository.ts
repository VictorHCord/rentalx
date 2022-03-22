import { ICreateCarDto } from "../dtos/ICreateCarDto"
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicesePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository }
