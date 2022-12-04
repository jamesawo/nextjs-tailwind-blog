import Link from "next/link";
import React from "react";
import {IconType} from "react-icons";
import Tooltip from "../shared/tooltip";

interface MenuProps {
    icon: IconType;
    title: string;
    url: string
}

const EditorMenuLink: React.FC<MenuProps> = ({icon, title, url}) => {
    return (
        <>
            <li>
                <Link href={url} className="text-base text-gray-900 font-normal
                        rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                    {React.createElement(icon)}
                    <span className="ml-2">{title}</span>
                </Link>

            </li>
        </>
    );
}
export default EditorMenuLink;
