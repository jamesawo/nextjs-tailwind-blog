import EditorPostArticle from "./editorPostArticle";
import EditorPostAction from "./editorPostAction";
import {IListAction} from "../../lib/types/data.interface";

type Props = {
    data: IListAction[];
}
const EditorPostList = ({data}: Props) => {
    return (
        <>
            {
                data.map((value, index) => (
                    <div key={index} className="mb-10 flex flex-row justify-between gap-3 mx-auto">
                        <EditorPostArticle postPublishedDate={value.date} postTitle={value.title} postId={value.id??''}/>
                        <EditorPostAction id={value.id??''} deleteAction={value.deleteAction} editAction={value.editAction}/>
                    </div>
                ))
            }
        </>
    );
}

export default EditorPostList;
