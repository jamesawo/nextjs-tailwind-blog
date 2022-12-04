import React, {ReactElement} from "react";
import EditorLayout from "../../../components/editor/editorLayout";
import ActionButton from "../../../components/shared/button";
import EditorPostList from "../../../components/editor/editorPostList";
import Link from "next/link";
import {IListAction} from "../../../lib/types/data.interface";
import {DUMMY_BOOKMARKS} from "../../../lib/data/data";

const EditorBookmarkIndex = () => {
    const handleEdit = (id: string): void => {
        console.log('editing post with ID: ', id)
    }

    const handleDelete = (id: string) => {
        console.log('delete handler clicked id: ', id);
    }

    const getPostData: () => IListAction[] = () => {
        return DUMMY_BOOKMARKS.map(value => {
            return {
                id: value.id,
                url: '',
                title: value.title,
                date: value.date,
                deleteAction: handleDelete,
                editAction: handleEdit
            }
        });
    }

    return (<>
        <div className="mb-10 flex justify-between">
            <h2 className="mb-2 text-xl">Manage Bookmarks</h2>
            <Link href="#">
                <ActionButton title="Create New" type={"button"}/>
            </Link>
        </div>

        <EditorPostList data={getPostData()} />
    </>);
}

EditorBookmarkIndex.getLayout = (content: ReactElement) => {
    return <EditorLayout>{content}</EditorLayout>
}


export default EditorBookmarkIndex;
