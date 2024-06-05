import express, { Application, Request, Response} from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import db from '../db/connection';
import routesMarkers from '../routes/markers';


export class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.port = process.env.PORT || '3001';
    this.app = express();
    this.listen();
    this.middlewares(); //siempre antes de los routes
    this.routes();
    this.dbConnection();
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  routes(){
    this.app.get('/', (req: Request, res: Response) => {
      res.json({ 
            msg : 'API Working'
        })
    });
    this.app.use('/api/users', routesUser);
    this.app.use('/api/markers', routesMarkers);
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
  }

  async dbConnection(){
    try {
      await db.authenticate();
      console.log('Database online');
    }
    catch (error) {
        console.log(error);
        throw new Error('Error en la conexión a la base de datos');
    }
  }
    
}

export default Server;
