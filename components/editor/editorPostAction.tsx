import {AiFillDelete, AiFillEdit} from "react-icons/ai";

type Props = {
    id: string;
    deleteAction: (id: string) => void;
    editAction: (id: string) => void;
}
const EditorPostAction = ({deleteAction, editAction, id}: Props) => {
    return (
        <div className="flex flex-row gap-5">
            <span
                onClick={() => deleteAction(id)}
                className="cursor-pointer rounded p-5 bg-gray-200 hover:bg-gray-400">
                <AiFillDelete color="red"/>
            </span>

            <span
                onClick={() => editAction(id)}
                className="cursor-pointer rounded p-5 bg-gray-200  hover:bg-gray-400">
                    <AiFillEdit/>
                </span>
        </div>
    );
}

export default EditorPostAction;
