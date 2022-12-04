import Image from 'next/image'
import scooterPic from '../../public/img/jamie.png'

const HomeIntro = () => {
    return (
        <section className="relative mt-32">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold mt-2">👋🏾</h1>
                <h1 className="text-4xl font-bold mt-2">I&apos;m James</h1>
                <p className="mt-2">Welcome to my digital garden. 🌱</p>
                <p className="mt-2">
                    I am fullstack software engineer.
                    I am picking up momentum on open-source projects and I write about code, architecture, and life. I like music, sci-fi and Scootering.
                </p>
            </div>
            <Image
                src={scooterPic}
                alt="Jamie_Scooter"
                className="w-3/4 absolute -right-20 mt-16 md:w-2/4 md:right-0"
                priority
            />
        </section>
    );
}

export default HomeIntro;
