import ProjectIntro from "../components/projects/projectIntro";
import ProjectsList from "../components/projects/projectsList";
import {DUMMY_PROJECTS} from "../lib/data/data";

const Project = ( ) => {
    return (
       <>
           <ProjectIntro />
           <ProjectsList projects={DUMMY_PROJECTS} />
       </>
    );
}

export default Project;
