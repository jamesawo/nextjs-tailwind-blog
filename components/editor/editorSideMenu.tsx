import {AiFillCarryOut,
    AiFillFilePpt, AiFillFolderOpen, AiFillLock, AiFillSetting,
} from "react-icons/ai";
import EditorMenuLink from "./editorMenuLink";

const EditorSideMenu = () => {
    return (
        <>
            <aside
                   className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex
                   flex-shrink-0 flex-col w-34 transition-width duration-75 lg:flex
                   mx-10 xl:mx-20 lg:mx-80 md:mx-52 sm:mx-40"
                   aria-label="Sidebar">
                <div className="relative  flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto overflow-x-visible">
                        <div className="flex-1 px-3 bg-white divide-y space-y-1">
                            <ul className="space-y-2 pb-2">
                                <EditorMenuLink icon={AiFillFolderOpen} title={'Blogs'}  url={'/editor/blog'} />
                                <EditorMenuLink icon={AiFillCarryOut} title={'Bookmarks'}  url={'/editor/bookmark'} />
                                <EditorMenuLink icon={AiFillFilePpt} title={'Projects'} url={'/editor/project'} />
                            </ul>
                            <div className="space-y-2 pt-2">
                                <ul className="space-y-2 pb-2">
                                    <EditorMenuLink icon={AiFillSetting} title={'Sign Out'} url={''} />
                                    <EditorMenuLink icon={AiFillLock} title={'Lock'} url={''} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
export default EditorSideMenu;
