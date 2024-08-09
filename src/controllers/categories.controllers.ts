import { NextFunction, Request, Response } from 'express';
import { CategorieService } from '../services/categorieService';
import { CategoryRepository } from '../database/repositories/category.repository';
import { CategoryModel } from '../schemas/category.schema';
import { CreateCategoryDto } from '../dtos/categories.dto';

export class CategorieController {
  async create(
    req: Request<unknown, unknown, CreateCategoryDto>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;
      const repository = new CategoryRepository(CategoryModel);
      const service = new CategorieService(repository);

      const result = await service.create({ title, color });

      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }
}
