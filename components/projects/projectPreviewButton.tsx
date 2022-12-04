import Link from "next/link";
import {IProjectAction} from "../../lib/types/data.interface";

type Props = {
    action: IProjectAction
}
const ProjectPreviewButton = ({action}: Props) => {
  return (
      <div className="flex item-center justify-between mt-4">
          <Link href={action.link}>
              <button
                  className="px-3 py-2 bg-[#0093F7] text-white text-xs font-bold rounded  hover:bg-pink-500">
                  {action.title ?? 'preview'}
              </button>
          </Link>
      </div>
  );
}

export default ProjectPreviewButton;
