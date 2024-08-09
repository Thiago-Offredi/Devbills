import { Router } from 'express';
import { baseRoutes } from './base.route';
import { categorieRoutes } from './categoriesRoutes';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categorieRoutes);
