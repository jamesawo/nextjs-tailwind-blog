import {useRouter} from "next/router";
import {ReactElement, useState} from "react";

import EditorLayout from "../../../components/editor/editorLayout";
import Form from "../../../components/shared/form";
import {IBlogPost, IPostFormFields, IResponse} from "../../../lib/types/data.interface";
import {BLOG_FORM_FIELDS} from "../../../lib/data/data";
import {BlogService} from "../../../lib/service/blog.service";


const NewPath = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {path} = router.query

    const handleSubmit = async (post: IPostFormFields): Promise<boolean> => {
        /*
            todo:: more features to add
            add validation before saving post
            add ability to save post to draft (use localstorage) before saving to database

         */
        setIsLoading(true);
        const response: IResponse<string> = await BlogService.create(post);
        setIsLoading(false);
        return response.status;
    }

    return (
        <>
            <h1 className="mb-10 font-bold"> {path === 'create' ? 'Create' : 'Update'} Post</h1>
            <Form fields={BLOG_FORM_FIELDS} onSubmit={handleSubmit} loading={isLoading}/>
        </>
    );
}

NewPath.getLayout = (content: ReactElement) => {
    return <EditorLayout>{content}</EditorLayout>
}

export default NewPath;
