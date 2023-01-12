import {MongoClient} from "mongodb";
import * as process from "process";

export class Connection {
    /**
     * Singleton instance of Connection
     * @private
     */
    private static instance: Connection;

    /**
     * The Connection's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
    }

    /**
     * The static method that controls the access to the Connection instance.
     *
     * This implementation let you subclass the Connection class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Connection {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }

        return Connection.instance;
    }

    /**
     * Helper using env value to get
     * mongodb client instance
     */
    public getMongoClient(): Promise<MongoClient> {
        return Connection.connect();
    }

    public static async getMongoDbClientInstance(): Promise<MongoClient> {
        const connection = Connection.getInstance();
        return await connection.getMongoClient();
    }

    public static getDbName(): string {
        return process.env.MONGO_DB_NAME ?? 'store';
    }

    private static async connect(): Promise<MongoClient> {
        const connectionString = process.env.MONGO_DB_URI!;
        let client = new MongoClient(connectionString);
        await client.connect();
        return client;
    }
}
