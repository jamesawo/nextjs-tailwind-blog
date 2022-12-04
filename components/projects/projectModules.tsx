import {ITag} from "../../lib/types/data.interface";
import Tag from "../shared/tag";
import {Fragment} from "react";

type Props = {
    modules?: ITag[];
}

const ProjectModules = ({modules}: Props) => {
  return (
      <Fragment>
      {
          modules && modules.length > 0 ? (
              <div className="flex flex-col gap-2 mb-3">
                  <p className="mt-4 text-gray-800 text-sm">
                      <span className="font-bold">Modules: </span>
                  </p>

                  <div className="flex flex-row flex-wrap gap-1">
                      {
                          modules.map( (module, index) => (
                              <Tag key={index} text={module.text} showHash={module.showHash} link={module.link} />
                          ) )
                      }
                  </div>
              </div>
          ) : (<div />)
      }
      </Fragment>
  );
}

export default ProjectModules;
