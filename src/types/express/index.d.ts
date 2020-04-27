import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { type } from 'os';
import winston from 'winston';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
  }

  export type Logger = winston.Logger;
}
