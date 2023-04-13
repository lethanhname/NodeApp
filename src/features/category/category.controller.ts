import express from 'express';
import BaseController from '../../routes/base.controller';

class CategoryController extends BaseController {
  public initRoutes(): void {
    const path = '/cats';
    this.router.get(path, this.getAll);
  }

  getAll = (request: express.Request, response: express.Response) => {
    response.send([{ name: 'cat' }]);
  };
}

export default CategoryController;
