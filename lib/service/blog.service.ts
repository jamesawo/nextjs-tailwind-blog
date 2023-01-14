import {IBlogPost, IPostFormFields, IResponse, ITag} from "../types/data.interface";
import {toast} from "react-toastify";
import {getBaseUrl} from "./shared.service";

export class BlogService {

    public static async create(formSubmission: IPostFormFields): Promise<IResponse<string>> {
        const {date, content, tags, title, author} = formSubmission;
        let postTags = this.splitPostTags(tags);
        const post: IBlogPost = {
            tags: postTags,
            author,
            content,
            publish_on: date,
            title,
        }
        const response = await fetch(`${getBaseUrl()}/api/blog/create`,
            {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {'Content-Type': 'application/json'}
            }
        );

        if (!response.ok) {
            toast(response.statusText, {type: 'error'})
            return {status: false, data: '', message: 'Failed'};
        }

        let result = await response.json();
        const postId = result.data.id;
        toast(`${result.message}`, {type: 'success'})
        return {status: true, data: postId, message: result.message};
    }

    private static splitPostTags(tags: string,): ITag[] {
        let postTags: ITag[] = [];
        if (tags.length) {
            const split = tags.split(',');
            split.forEach(value => postTags.push({text: value.trim(), showHash: false}));
        }
        return postTags;
    }

    public async update(id: string, payload: IBlogPost): Promise<void> {
    }

    public async remove(id: string): Promise<void> {
    }

    public static async get(slug: string): Promise<IBlogPost> {
        const response = await fetch(`${getBaseUrl()}/api/blog/${slug}`);
        const result: IResponse<IBlogPost> = await response.json();
        return result.data;
    }

    public static async getPosts(): Promise<IBlogPost[]> {
        try{
            const response = await fetch(`${getBaseUrl()}/api/blog/all`, {
                method: "GET",
                headers: {'content-type': 'application/json'}
            });
            console.log(response);

            if (!response.ok) {
                return [];
            }
            const result: IResponse<IBlogPost[]> = await response.json();
            return result.data;
        }catch (e) {
            console.log(e);
            return [];
        }
    }

}


