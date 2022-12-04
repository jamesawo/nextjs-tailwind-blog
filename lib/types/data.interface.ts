import {InputTypeEnum} from "./data.enum";

export interface ITag {
    text: string;
    showHash: boolean;
}

export interface IResponse<T> {
    status: boolean;
    message: string;
    data: T;
}

export interface ITimeStamp {
    createdAt: Date;
    updatedAt?: Date;
}

export interface IPostFormFields {
    title: string;
    author: string;
    date: string;
    tags: string;
    content: string;
}


// as post schema
export interface IBlogPost {
    _id?: string;
    title: string;
    publish_on: string;
    author: string;
    content: string;
    excerpt?: string;
    read?: number;
    views?: number;
    tags?: ITag[];
}

export interface IBookmark {
    id: string;
    title: string;
    link: string;
    date: string;
    tags: ITag[]
}

export interface IProductDesign {
    platform: string;
    link: string;
}

export interface IProjectDescription {
    shortDescription: string;
    designs: IProductDesign[];
}

export interface IProjectAction {
    link: string;
    title: string
}

export interface IProject {
    id: string;
    date: string;
    image: string;
    title: string;
    description: IProjectDescription;
    link: string;
    industries: ITag[];
    stacks: ITag[];
    action: IProjectAction;
    modules?: ITag[];
}

export interface IListAction {
    id?: string;
    title: string;
    url: string;
    date: string;
    editAction: (id: string) => void;
    deleteAction: (id: string) => void;
}

export interface IFormInputRule {
    rule: 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'validate';
    value: any;
}

export interface IFormInput {
    name: string;
    type: InputTypeEnum;
    label: string;
    rule?: IFormInputRule;
    defaultValue: any;
    placeholder?: string;
    required?: boolean;
}

export interface IForm {
    postUrl: string;
    inputs: IFormInput[];
}
