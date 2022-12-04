import Tag from "../shared/tag";
import {ITag} from "../../lib/types/data.interface";

type Props = {
    tags?: ITag[];
}
const BlogTags = ({tags}: Props) => {
    return (
        <div className="flex flex-wrap gap-5 space-x-2 py-2 border-t border-dashed dark:border-gray-400">
            <div className="flex flex-row flex-wrap gap-1 ">
                {
                    tags && tags.length > 0 ?
                        tags.map((tag, index) => (
                            <Tag key={index} showHash={tag.showHash} text={tag.text}/>
                        ))
                        : <div/>
                }
            </div>
        </div>
    );
}
export default BlogTags;
