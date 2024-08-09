import { Router } from 'express';
import { CategorieController } from '../controllers/categories.controllers';

export const categorieRoutes = Router();

const controller = new CategorieController();
categorieRoutes.post('/', controller.create);
