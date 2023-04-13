import express from 'express';
import BaseController from './base.controller';
import ProductController from '../features/product/product.controller';
import CategoryController from '../features/category/category.controller';

class Router {
  public routes = express.Router();
  constructor(controllers: Array<BaseController>) {
    controllers.forEach((controller) => {
      controller.initRoutes();
      this.routes.use('/', controller.router);
    });
  }
}
const router = new Router([
  new ProductController(),
  new CategoryController()
]
);
export default router;