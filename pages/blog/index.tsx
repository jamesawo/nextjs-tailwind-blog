import BlogIntro from "../../components/blog/blogIntro";
import BlogPosts from "../../components/blog/blogPosts";
import {BlogService} from "../../lib/service/blog.service";
import {IBlogPost} from "../../lib/types/data.interface";

type Props = {
    posts: IBlogPost[];
}

const Blog = ({posts}: Props) => {
    return (
        <>
            <BlogIntro/>
            <BlogPosts posts={posts}/>
        </>
    );
}

export default Blog;

export async function getStaticProps(context: any) {
    const posts = await BlogService.getPosts();

    // if (!posts.length) {
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/404",
    //         },
    //     };
    // }

    return {
        props: {
            posts,
        }, // will be passed to the page component as props
    };
}
