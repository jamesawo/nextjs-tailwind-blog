import {ITag} from "../../lib/types/data.interface";

const Tag = ({text, showHash}: ITag) => {
    return (
        <span
            className="h-max text-sm font-medium
            bg-gray-100 py-1 px-2 rounded text-black
            align-middle hover:bg-pink-500 hover:text-white"
        >
            {showHash ? '#' : ''}{text}
        </span>

        // popular tags style
        // <span key={index} className="h-max text-sm font-medium
        //     bg-pink-300 py-1 px-2 rounded text-black align-middle
        //     hover:bg-pink-500 hover:text-black">
        //     {tag.text}
        // </span>

        // bookmark tag style
         // <span className="h-max text-sm font-medium
         //    bg-pink-300 py-1 px-2 rounded text-black align-middle
         //    hover:bg-pink-500 hover:text-black">
         //        web
         //    </span>
        /*
        project industry tags
        * <span className="h-max text-sm font-medium
                    bg-gray-100 py-1 px-2 rounded text-black align-middle
                     hover:bg-pink-500 hover:text-white">
                    Healthcare
                </span>*/

        /*
        project stacks tags
        * <span className="h-max text-sm font-medium
                        bg-gray-100 py-1 px-2 rounded text-black align-middle
                        hover:bg-pink-500 hover:text-white">
                            Java
                    </span>*/
        /*
        project modules tag
        * <span className="h-max text-sm font-medium bg-gray-100 py-1 px-2 rounded text-black align-middle
                    hover:bg-pink-500 hover:text-white">
                Electronic medical records
            </span>*/
    );
}

export default Tag;
