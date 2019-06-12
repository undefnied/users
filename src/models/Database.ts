import mongoose from "mongoose";
import bluebird from "bluebird";
import { MongoError } from "mongodb";

export class Database {
  // Initialize your database pool
  public static init(): any {
    const dsn = "mongodb://127.0.0.1:27017/users";
    const options = { useNewUrlParser: true };

    (<any>mongoose).Promise = bluebird;

    mongoose.connect(dsn, options, (error: MongoError) => {
      // handle the error case
      if (error) {
        //Log.info("Failed to connect to the Mongo server!!");
        console.log(error);
        throw error;
      } else {
        //Log.info("connected to mongo server at: " + dsn);
      }
    });
  }
}

export default mongoose;
