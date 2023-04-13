import express from 'express';
import BaseController from '../../routes/base.controller';

class ProductController extends BaseController {
  public initRoutes(): void {
    const path = '/products';
    this.router.get(path, this.getAll);
  }

  getAll = (request: express.Request, response: express.Response) => {
    response.send([{ name: 'test' }]);
  };
}

export default ProductController;
