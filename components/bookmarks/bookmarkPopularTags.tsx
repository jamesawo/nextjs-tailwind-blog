import {ITag} from "../_data/data.interface";
import Tag from "../shared/tag";

type Props = {
    tags: ITag[]
}

const BookmarkPopularTags = ({tags}: Props) => {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-justify text-lg font-bold mt-5">
                Popular Tags
            </p>

            <div className="flex flex-row flex-wrap gap-2">
                {
                    tags.map((tag, index) => (
                        <Tag key={index} text={tag.text} showHash={tag.showHash} />
                    ) )
                }
            </div>
        </div>
    );
}

export default BookmarkPopularTags;
