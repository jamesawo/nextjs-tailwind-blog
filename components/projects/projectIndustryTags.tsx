import {ITag} from "../../lib/types/data.interface";
import Tag from "../shared/tag";

type Props = {
    tags: ITag[]
}
const ProjectIndustryTags = ({tags}: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <p className=" text-gray-800 text-sm">
                <span className="font-bold">Industry & Tags: </span>
            </p>

            <div className="flex flex-row flex-wrap gap-1">
                {tags && tags.length > 0 ?
                    (tags.map((tag, index) => (
                            <Tag key={index} text={tag.text} showHash={tag.showHash} />
                        ))
                    ) :
                    <div/>
                }
            </div>

        </div>
    );
}

export default ProjectIndustryTags;
