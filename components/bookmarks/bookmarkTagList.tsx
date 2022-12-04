import BookmarkTag from "./bookmarkTag";
import {IBookmark} from "../../lib/types/data.interface";

type Props = {
    bookmarks: IBookmark[]
}
const BookmarkTagList = ({bookmarks}: Props) => {

    return  (
        <section className="mt-14 flex flex-col gap-16">
                {
                    bookmarks.map((bookmark, index) => (
                        <BookmarkTag key={index} bookmark={bookmark} />
                    ) )
                }

        </section>
    );

}

export default BookmarkTagList;
