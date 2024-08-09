import { error } from 'console';
import { CategoryRepository } from '../database/repositories/category.repository';
import { CreateCategoryDto } from '../dtos/categories.dto';
import { Category } from '../entities/category.entity';
import { AppError } from '../errors/app.error';
import { StatusCodes } from 'http-status-codes';

export class CategorieService {
  constructor(private categoriesRepositories: CategoryRepository) {}
  public async create({ title, color }: CreateCategoryDto): Promise<Category> {
    const foundCategory = await this.categoriesRepositories.findByTitle(title);
    if (foundCategory) {
      throw new AppError('Category already exists', StatusCodes.BAD_REQUEST);
    }
    const category = new Category({
      title,
      color,
    });

    const createdCategory = await this.categoriesRepositories.create(category);

    return createdCategory;
  }
}
