import { ICategoriesRepository } from 'modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from 'modules/cars/repositories/implementatios/CategoriesRepository';
import { SpecificationsRepository } from 'modules/cars/repositories/implementatios/SpecificationsRepository';
import { ISpecificationsRepository } from 'modules/cars/repositories/ISpecificationRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
