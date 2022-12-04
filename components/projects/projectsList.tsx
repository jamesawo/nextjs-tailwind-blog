import Project from "./project";
import {IProject} from "../../lib/types/data.interface";

type Props = {
    projects: IProject[]
}

const ProjectsList = ({projects}: Props) => {
    return (
        <section className="mt-14 flex flex-col gap-16">
            {
                projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))
            }
        </section>
    );
}

export default ProjectsList;
