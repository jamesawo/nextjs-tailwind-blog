import Link from "next/link";

const HomeLinks = () => {
    return <>
        <section id="links" className="flex flex-col mt-20 ">
            
            <div className="sm:w-max flex-3">
                <div className="flex flex-col  text-gray-700">
                    <p className="font-normal font-mono ">My space on the web</p>
                    <ul className="list-disc list-inside mt-5">
                        <li><Link href={"/blog"} className="hover:text-pink-600 font-mono">blog</Link></li>
                        <li><Link href={"/project"} className="hover:text-pink-600 font-mono">projects</Link></li>
                        <li><Link href={"/bookmark"} className="hover:text-pink-600 font-mono">bookmarks</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col mt-10  text-gray-700">
                    <p className="font-normal font-mono">Find me on the internet</p>
                    <ul className="list-disc list-inside mt-5">
                        <li><Link href={"https://github.com/jamesawo/"} className="hover:text-pink-600 font-mono">github</Link></li>
                        <li><Link href={""} className="hover:text-pink-600 font-mono">linkedin</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col mt-10  text-gray-700">
                    <p className="font-normal font-mono">Contact me </p>
                    <ul className="list-disc list-inside mt-5">
                        <li><Link href={""} className="hover:text-pink-600 font-mono">email</Link></li>
                        {/*<li><Link href={""} className="hover:text-pink-600 font-mono">whatsapp</Link></li>*/}
                        <li><Link href={""} className="hover:text-pink-600 font-mono">skype</Link></li>
                    </ul>
                </div>
            </div>

        </section>
    </>
}

export default HomeLinks;
