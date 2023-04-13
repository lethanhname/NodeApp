
import express from 'express';
import bodyParser from 'body-parser';

import { NODE_ENV, PORT } from './config/secrets';
import ConnectionFactory from './connection/connection-factory';
import errorMiddleware from './middleware/error.middleware';
import loggerMiddleware from './middleware/logger.middleware';
class ExpressServer {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  async runApp() {
    this.app.listen(PORT || 8080, () => {
      console.info(
        'Server is running at http://localhost:%d in %s mode',
        PORT,
        NODE_ENV,
      );
      console.info('Press CTRL-C to stop');
    });

    this.initDatabase();
    this.initMiddleware();
    this.initRouter();
    this.initErrorHandling();
  }

  private initDatabase() {
    const connection: Connection = ConnectionFactory.getConnection(
      DBType.MongoDb,
    );
    connection.connect();
  }

  private initMiddleware() {
    this.app.use(loggerMiddleware);
    // handle body parser
    this.app.use(bodyParser.json());
    // handle cors error
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      );
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE',
      );
      next();
    });
  }

  private initRouter() {
    this.app.get('/', (req, res) => {
      res.send('<h1>Welcome to express server</h1>');
    });
  }
  private initErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

const expressServer = new ExpressServer();

expressServer.runApp().catch((err) => {
  console.trace('App shutdown due to a problem', err.message);
  process.exit(1);
});
