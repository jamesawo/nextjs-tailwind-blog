import {ObjectId} from 'mongodb';
import type {NextApiRequest, NextApiResponse} from 'next'
import {Connection} from "../../../lib/service/connection.service";

const POST_COLLECTION = 'posts';
type ResponseData = {
    message: string;
    data?: any;
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        if (req.method === 'GET') {
            const {slug} = req.query
            const client = await Connection.getMongoDbClientInstance();
            const db = client.db(Connection.getDbName());

            const collection = db.collection(POST_COLLECTION);
            const id: string = slug as string;
            const result = await collection.findOne({_id: new ObjectId(id)});

            client.close().then();
            res.status(200).send({message: 'Post Saved Successfully!', data: result});
        }
    } catch (e) {
        return res.status(500).json({
            message: 'An Error Occurred!',
        });
    }
}

export default handler;
