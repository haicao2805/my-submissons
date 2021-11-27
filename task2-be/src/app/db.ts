import { config } from "../../config";
import { MongoClient, Db } from "mongodb";

let db: Db;

export const initDb = () => {
    MongoClient.connect(
        config.DB_URL,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (error, result) => {
            if (error) {
                return console.log(
                    `Connect to mongodb failed: ${error.message}`
                );
            }
            db = result.db("test");
            console.log(`Connect to database successfully`);
        }
    );
};

export const getDb = () => {
    if (!db) {
        console.log("You have to initialized DB");
    }

    return db;
};
