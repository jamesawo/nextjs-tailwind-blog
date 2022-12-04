import Link from "next/link";
import Seo from "../shared/seo";

const Header = () => {
    return (
        <>
            <Seo />
            <section>
            <nav className="flex flex-row justify-between">
                <Link className="text-lg font-bold hover:text-pink-600 font-mono" href="/">
                    James.
                </Link>
                <div className="flex space-x-6">
                    <Link href={"/blog"} className="text-base hover:text-pink-500 font-mono">blog</Link>
                    <Link href={"/project"} className="text-base hover:text-pink-500 font-mono">projects</Link>
                    <Link href={"/bookmark"} className="text-base  hover:text-pink-500 font-mono">bookmarks</Link>

                </div>

                <div className="toggle">
                    <div className="">
                        <span className="toggle-moon" title="Enable dark mode" aria-hidden="true"/>
                        <span className="toggle-sun" title="Enable light mode" aria-hidden="true"/>
                    </div>
                </div>
            </nav>
        </section>
        </>
    );
}

export default Header;
