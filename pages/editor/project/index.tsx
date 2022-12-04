import React, {ReactElement} from "react";
import EditorLayout from "../../../components/editor/editorLayout";
import ActionButton from "../../../components/shared/button";
import EditorPostList from "../../../components/editor/editorPostList";
import Link from "next/link";
import {IListAction} from "../../../lib/types/data.interface";
import {DUMMY_PROJECTS} from "../../../lib/data/data";

const EditorProjectIndex = () => {
    const handleEdit = (id: string): void => {
    }

    const handleDelete = (id: string) => {
    }

    const getPostData: () => IListAction[] = () => {
        return DUMMY_PROJECTS.map(value => {
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
            <h2 className="mb-2 text-xl">Manage Projects</h2>
            <Link href="#">
                <ActionButton title="Create New" type={"button"}/>
            </Link>
        </div>

        <EditorPostList data={getPostData()}/>
    </>);

}


EditorProjectIndex.getLayout = (content: ReactElement) => {
    return <EditorLayout>{content}</EditorLayout>
}

export default EditorProjectIndex;
