import Link from "next/link";
import BlogTags from "./blogTags";
import {IBlogPost} from "../../lib/types/data.interface";

type Props = {
    post: IBlogPost;
}
const BlogPost = ({post}: Props) => {
    return (
        <div className="mb-10 flex flex-col gap-3 mx-auto">
            <article className=" dark:bg-gray-800 dark:text-gray-50">
                <div className="space-y-3">
                    <h1 className="text-2xl font-medium md:tracking-tight">
                        <Link href={`/blog/${post._id}`} className="hover:underline hover:underline-offset-1">
                            {post.title}
                        </Link>
                    </h1>
                    <div
                        className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm text-gray-500">
                                <span>{post.author}</span> • <span>{new Date(post.publish_on).toDateString()}</span>
                            </p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-gray-500 text-sm md:mt-0">
                            <span>{post.read} min read </span> • <span>{post.views} views </span>
                        </p>
                    </div>
                </div>
            </article>
           <BlogTags tags={post.tags} />
        </div>
    );
}

export default BlogPost;
