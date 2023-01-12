import { Analytics } from '@vercel/analytics/react';
import BookmarkIntro from "../components/bookmarks/bookmarkIntro";
import BookmarkTagList from "../components/bookmarks/bookmarkTagList";
import {DUMMY_BOOKMARKS} from "../lib/data/data";

const Bookmark = () => {
    return (
        <>
            <BookmarkIntro/>
            <BookmarkTagList bookmarks={DUMMY_BOOKMARKS}/>
            <Analytics />
        </>
    );
}

export default Bookmark;

