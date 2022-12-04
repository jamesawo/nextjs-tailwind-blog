import Link from "next/link";

const Footer = () => {
    return (
        <section id="footer" className="flex flex-col mt-32 ">
            <footer className="flex flex-row justify-between">
                <Link className="" href={"/"}>
                    <span className="text-pink-600 font-bold text-lg font-mono">♥</span>️
                </Link>
            </footer>
        </section>
    );
}

export default Footer;
