import { config } from "../../config";
import { MongoClient, Db } from "mongodb";

import { logger } from "./logging";

let db: Db;

export const initDb = () => {
    MongoClient.connect(
        config.DB_URL,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (error, result) => {
            if (error) {
                return logger.error(
                    `Connect to mongodb failed: ${error.message}`
                );
            }
            db = result.db("test");
            logger.info(`Connect to database successfully`);
        }
    );
};

export const getDb = () => {
    if (!db) {
        logger.error("You have to initialized DB");
    }

    return db;
};
