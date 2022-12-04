import BlogPost from "./blogPost";
import {IBlogPost} from "../../lib/types/data.interface";

type Props = {
    posts: IBlogPost[];
}

const BlogPosts = ({posts}: Props) => {
    return <>
        <section className="mt-16">
            {
                posts.map((post, index) => (
                    <BlogPost key={index} post={post}/>
                ))
            }
        </section>
    </>
}

export default BlogPosts;
