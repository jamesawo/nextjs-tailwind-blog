import Head from "next/head";

type Props = {
    seoDescription?: string;
    seoTitle?: string;
}

const Seo = ({seoTitle, seoDescription}: Props) => {
    const author = "James";
    const imagePath = "/img/jamie.png";
    const favicon = "/img/favicon.ico";
    const pageTitle = `${author}  - ${seoTitle ?? 'Personal | Projects | Blog Website' }`;
    const description = seoDescription ??
        `
            Hi, my name is ${author} welcome to my personal space on the web. 
            I am a full-stack software engineer. 
            I'm passionate about building functional and performant products, 
            I like to learn new stuff and I get excited when 
            I work on big problems with amazing people.
        `;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description}/>
                <meta
                    name="keywords"
                    content={`${author} software engineer, fullstack, daily brand`}
                />
                <meta name="author" content={author}/>
                <meta property="og:title" content={author}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={imagePath}/>

                {/* for twitter */}
                <meta name="twitter:title" content={author}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={imagePath}/>
                <link rel="icon" href={favicon}/>
            </Head>
        </>
    );
}

export default Seo;
