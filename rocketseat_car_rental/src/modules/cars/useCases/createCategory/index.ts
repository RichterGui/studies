import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoyrUseCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
