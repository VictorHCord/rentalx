import { ICreateCarDto } from "@modules/cars/dtos/ICreateCarDto";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []
  async create({
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
    brand
  }: ICreateCarDto): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
      brand
    })

    this.cars.push(car);
    return car;
  }

  async findByLicesePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate)!;
  }
}

export { CarsRepositoryInMemory }
