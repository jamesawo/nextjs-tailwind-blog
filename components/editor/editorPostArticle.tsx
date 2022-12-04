import Link from "next/link";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";

type Props = {
    postTitle: string;
    postPublishedDate: string;
    postId: string;
}
const EditorPostArticle = ({postPublishedDate, postTitle, postId}: Props) => {
    return (
        <article className=" dark:bg-gray-800 dark:text-gray-50">
            <div className="space-y-2">
                <h4 className="text-small font-medium md:tracking-tight">
                    <Link href={`/blog/${postId}`} target='_blank' className="hover:underline hover:underline-offset-1">
                        {postTitle}
                    </Link>
                </h4>
                <div
                    className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <p className="text-sm text-gray-500">
                            published: {new Date(postPublishedDate).toDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default EditorPostArticle;
