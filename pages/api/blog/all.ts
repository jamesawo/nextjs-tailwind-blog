import type {NextApiRequest, NextApiResponse} from 'next'
import {Connection} from "../../../lib/service/connection.service";

const POST_COLLECTION = 'posts';
type ResponseData = {
    message: string;
    data?: any
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        if (req.method === 'GET') {
            const client = await Connection.getMongoDbClientInstance();
            const db = client.db(Connection.getDbName());

            const result = await db.collection(POST_COLLECTION).find({}).sort ( { created_at: -1 } ).toArray();
            client.close();
            res.status(200).send({message: 'Posts Retrieved Successfully!', data: result});
        }
    } catch (e) {
        res.status(500).send({
            message: 'An Error Occurred!',
        });
    }
}


export default handler;
