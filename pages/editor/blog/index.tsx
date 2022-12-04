import Link from "next/link";
import React, {ReactElement} from "react";
import EditorLayout from "../../../components/editor/editorLayout";
import ActionButton from "../../../components/shared/button";
import EditorPostList from "../../../components/editor/editorPostList";
import {IBlogPost, IListAction} from "../../../lib/types/data.interface";
import {BlogService} from "../../../lib/service/blog.service";

type Props = {
    posts: IBlogPost[]
}
const EditorBlogIndex = ({posts}: Props) => {

    const handleEdit = (id: string): void => {
    }

    const handleDelete = (id: string): void => {
    }

    const getPosts: () => IListAction[] = () => {
        return posts.map(value => {
            return {
                id: value._id,
                url: '',
                title: value.title,
                date: value.publish_on,
                deleteAction: handleDelete,
                editAction: handleEdit
            }
        });
    }

    return (<>
        <div className="mb-10 flex justify-between">
            <h2 className="mb-2 text-xl">Manage Blog Posts</h2>
            <Link href={'blog/create'}>
                <ActionButton title="Create New" type={"button"}/>
            </Link>
        </div>

        <EditorPostList data={getPosts()} />
    </>);
}

export async function getServerSideProps() {
    let posts = await BlogService.getPosts();
    return {
        props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
}


EditorBlogIndex.getLayout = (content: ReactElement) => {
    return <EditorLayout>{content}</EditorLayout>
}

export default EditorBlogIndex;
