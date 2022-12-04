import Link from "next/link";
import Tag from "../shared/tag";
import {IBookmark} from "../../lib/types/data.interface";

type Props = {
    bookmark: IBookmark
}

const BookmarkTag = ({bookmark}: Props) => {
    return (
        <div className="flex flex-col gap-3">
            <Link href={bookmark.link} className="hover:underline">
                <h3 className="text-black font-bold">{bookmark.title}</h3>
            </Link>

            <Link href={bookmark.link} className="text-gray-700 text-sm hover:underline">
                {bookmark.link}
            </Link>

            <div
                className="flex flex-col align-middle
                    items-center justify-items-center justify-between
                    w-6/12 sm:flex-row">

                <div className="flex flex-row gap-2">
                    {
                        bookmark.tags && bookmark.tags.length > 0 ?
                            bookmark.tags.map((tag, index) => (
                                <Tag key={index} text={tag.text} showHash={tag.showHash} link={tag.link}/>)
                            )
                            : (<div/>)
                    }
                </div>

                <span className="text-gray-500 text-sm mt-3 sm:mt-0 sm:ml-3">Saved {bookmark.date}</span>
            </div>
        </div>
    );
}

export default BookmarkTag;
