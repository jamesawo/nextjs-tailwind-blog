import Header from "./header";
import Footer from "./footer";
import {ComponentProps} from "react";

const Layout = ({children, props}: ComponentProps<any>) => {
    return (
        <section className="flex flex-col gap-0 my-10 mx-10 xl:mx-80 lg:mx-60 md:mx-52 sm:mx-40">
            <Header/>
            <div>{children}</div>
            <Footer/>
        </section>
    );
}

export default Layout;
