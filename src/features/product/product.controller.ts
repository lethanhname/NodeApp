import express from 'express';
import BaseController from '../../routes/base.controller';
import productService from './product.service';
import { BaseRequest } from '../../routes/base.request';
import CreateProductRequest from './product.model';
import validationMiddleware from '../../middleware/validation.middleware';

class ProductController extends BaseController {
  public initRoutes(): void {
    const path = '/products';
    this.router.get(path, this.getAll);
    this.router.post(path, validationMiddleware(CreateProductRequest), this.getAll);
  }

  
public createProduct = async (req: BaseRequest, res: express.Response, next: express.NextFunction) => {
  try {
      const product = await productService.create(req.body);
      res.status(201).json({
          success: true,
          message: 'CREATE_PRODUCT_SUCCESSFULLY',
          content: product,
      });
  } catch (error) {
      next(error);
  }
};
  getAll = (request: express.Request, response: express.Response) => {
    response.send([{ name: 'test' }]);
  };
}

export default ProductController;
