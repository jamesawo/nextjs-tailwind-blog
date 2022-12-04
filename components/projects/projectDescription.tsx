import ProjectDesigns from "./projectDesigns";
import {IProjectDescription} from "../../lib/types/data.interface";

type Props = {
    description: IProjectDescription;
}
const ProjectDescription = ({description}: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="mt-2 text-gray-800 text-sm">
                <span className="font-bold">Description:</span>
            </p>
            <span className="block text-gray-600 text-sm">{description.shortDescription}</span>
            <ProjectDesigns designs={description.designs}/>
        </div>
    );
}

export default ProjectDescription;
