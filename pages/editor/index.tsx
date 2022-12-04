import React, {ComponentProps, ReactElement} from "react";
import EditorLayout from "../../components/editor/editorLayout";

const EditorIndex = ({children}: ComponentProps<any>) => {
    return (<><h3>Welcome editor.</h3></>);
}

EditorIndex.getLayout = (content: ReactElement) => {
    return <EditorLayout>{content}</EditorLayout>
}

export default EditorIndex;
