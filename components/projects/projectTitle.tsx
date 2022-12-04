import Link from "next/link";

type Props = {
    title: string;
    link: string
}
const ProjectTitle = ({title, link}: Props) => {
  return (
      <h1 className="text-gray-800 font-bold text-2xl">
          <Link href={link} className="text-[#0093F7] hover:text-pink-500">{title}</Link>
      </h1>
  );
}

export default ProjectTitle;
