
import { NextFunction, Request, Response }  from 'express';
 
function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
  request.userId = "testUser";
  console.log(`${request.method} ${request.path} ${request.userId}`);
  next();
}
export default loggerMiddleware;