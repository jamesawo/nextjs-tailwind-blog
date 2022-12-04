import Tag from "../shared/tag";
import {ITag} from "../../lib/types/data.interface";

type Props = {
    stacks: ITag[];
}

const ProjectStackTags = ({stacks}: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="mt-2 text-gray-800 text-sm">
                <span className="font-bold">Stack & tools: </span>
            </p>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row flex-wrap gap-1">
                    {stacks && stacks.length > 0 ?
                        (stacks.map((tag, index) => (
                                <Tag key={index} text={tag.text} showHash={tag.showHash} link={tag.link}/>
                            ))
                        ) :
                        <div/>
                    }
                </div>
            </div>

        </div>
    );
}

export default ProjectStackTags;
