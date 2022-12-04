import {ObjectId} from 'mongodb';
import type {NextApiRequest, NextApiResponse} from 'next'
import {Connection} from "../../../lib/service/connection.service";

const POST_COLLECTION = 'posts';
type ResponseData = {
    message: string;
    data?: { id: ObjectId };
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        if (req.method === 'POST') {
            const client = await Connection.getMongoDbClientInstance();
            const db = client.db(Connection.getDbName());

            const collection = db.collection(POST_COLLECTION);
            const result = await collection.insertOne({...req.body, created_at: new Date()});
            client.close();
            res.status(201).send({message: 'Post Saved Successfully!', data: {id: result.insertedId}});
        }
    } catch (e) {
        res.status(500).json({
            message: 'An Error Occurred!',
        });
    }
}


export default handler;
