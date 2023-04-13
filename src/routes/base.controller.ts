import express from 'express';

abstract class BaseController {
  public router = express.Router();
  public abstract initRoutes(): void;
}
export default BaseController;
