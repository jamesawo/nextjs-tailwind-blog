import BookmarkPopularTags from "./bookmarkPopularTags";
import {ITag} from "../../lib/types/data.interface";


const DUMMY_TAGS: ITag[] = [
    {showHash: false, text: 'web'},
    {showHash: false, text: 'design patterns'},
    {showHash: false, text: 'tech news'},
];

const BookmarkIntro = () => {
  return (
      <section id="intro" className="relative mt-32">
          <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold ">Bookmarks</h1>

              <p className="text-justify  text-base">
                  My favorite place for keeping some useful, interesting, fun web hyperlinks.
              </p>

              <BookmarkPopularTags tags={DUMMY_TAGS} />

          </div>
      </section>
  );
}

export default BookmarkIntro;
