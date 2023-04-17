import express from 'express';
import BaseController from '../../routes/base.controller';
import productService from './product.service';
import CreateProductRequest from './product.model';
import validationMiddleware from '../../middleware/validation.middleware';

class ProductController extends BaseController {
  public initRoutes(): void {
    const path = '/products';
    this.router.get(path, this.getAll);
    this.router.post(path, validationMiddleware(CreateProductRequest), this.createProduct);
  }

  createProduct = async (req: express.Request, res: express.Response) => {
    const product = await productService.create(req.body);
    res.status(201).json({
      success: true,
      message: 'CREATE_PRODUCT_SUCCESSFULLY',
      content: product
    });
  };
  getAll = (request: express.Request, response: express.Response) => {
    response.send([{ name: 'test' }]);
  };
}

export default ProductController;
