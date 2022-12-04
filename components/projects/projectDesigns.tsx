import Link from "next/link";
import {IProductDesign} from "../../lib/types/data.interface";

type Props = {
    designs?: IProductDesign[]
}
const ProjectDesigns = ({designs}: Props) => {
    return (
        <div className="flex flex-row flex-wrap gap-4 text-gray-600 my-3">
            {
                designs && designs.length > 0 ?
                    <>
                        <span className="text-sm">view ui/ux product design: </span>
                        {
                            (designs.map((design, index) => (
                                <Link key={index} href={design.link} className="text-sm text-[#0093F7] hover:text-pink-500">
                                    {design.platform}
                                </Link>
                            )))
                        }
                    </>
                    : (<div/>)
            }
        </div>

    );
}

export default ProjectDesigns;
