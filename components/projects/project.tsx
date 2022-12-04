import ProjectImage from "./projectImage";
import ProjectTitle from "./projectTitle";
import ProjectDescription from "./projectDescription";
import ProjectIndustryTags from "./projectIndustryTags";
import ProjectStackTags from "./projectStackTags";
import ProjectPreviewButton from "./projectPreviewButton";
import ProjectModules from "./projectModules";
import {IProject} from "../../lib/types/data.interface";

type Props = {
    project: IProject
}

const Project = ({project}: Props) => {
    return (
        <div className="flex flex-col sm:flex-row   bg-white shadow-lg rounded-lg overflow-hidden">
            <ProjectImage image={project.image} />

            <div className="w-3/5 p-4 flex flex-col gap-5">

                <ProjectTitle title={project.title} link={project.link} />

                <ProjectDescription description={project.description} />

                <ProjectModules modules={project.modules} />

                <ProjectIndustryTags tags={project.industries} />

                <ProjectStackTags stacks={project.stacks} />

                <ProjectPreviewButton action={project.action} />
            </div>
        </div>
    );

}

export default Project;
