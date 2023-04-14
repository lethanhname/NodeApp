import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  console.log(`ERROR: ${request.userId} ${status} ${message} `);
  response
    .status(status)
    .send({
      status,
      message,
    });
    next();
}

export default errorMiddleware;