import { Specification } from "modules/cars/models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {

  create({ name,description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
