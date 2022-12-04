import MarkdownPreview from "../../components/shared/markdownPreview";
import {IBlogPost} from "../../lib/types/data.interface";
import {BlogService} from "../../lib/service/blog.service";
import Seo from "../../components/shared/seo";

type Props = {
    post: IBlogPost
}

const Detail = ({post}: Props) => {
  return (
      <>
          <Seo
              seoDescription={post.content.slice(0, 250)}
              seoTitle={post.title.slice(0,50) + '...'}
          />
          <div className="min-h-screen bg-primary w-full pt-10">
              <div className="mt-10 max-w-4xl mx-auto">
                  <h1 className="text-5xl font-semibold">
                      {post.title}
                  </h1>

                  <p className="text-base text-gray-500 mt-5">
                      {new Date(post.publish_on).toDateString()}
                  </p>

              </div>
              <div className=" sm:p-0 w-full sm:max-w-4xl mx-auto">
                  <MarkdownPreview
                      content={post.content}
                      className="bg-none "
                  />
              </div>
              <div className="h-28" />
          </div>
      </>
  );
}


export async function getStaticPaths() {
    const posts = await BlogService.getPosts();

    const paths = posts.map((post) => {
        return { params: { slug: post._id?.toString() } };
    });

    return {
        paths,
        fallback: "blocking", // false or 'blocking'
    };
}

export async function getStaticProps(context: any) {
    const post = await BlogService.get(context.params.slug);
    if (!post || !Object.keys(post).length) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            },
        };
    }
    return {
        props: { post },
    };
}

export  default  Detail;
