import { Analytics } from '@vercel/analytics/react';
import BlogIntro from "../../components/blog/blogIntro";
import BlogPosts from "../../components/blog/blogPosts";
import {BlogService} from "../../lib/service/blog.service";
import {IBlogPost} from "../../lib/types/data.interface";
import {DUMMY_PROJECTS} from "../../lib/data/data";

type Props = {
    posts: IBlogPost[];
}

const Blog = ({posts}: Props) => {
    return (
        <>
            <BlogIntro/>
            <BlogPosts posts={posts}/>
            <Analytics />
        </>
    );
}

export default Blog;

export async function getStaticProps(context: any) {
    const posts = await BlogService.getPosts();
    return {
        props: {
            posts,
        }, // will be passed to the page component as props
    };
}
