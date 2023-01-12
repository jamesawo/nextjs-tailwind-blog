import {Fragment} from "react";
import { Analytics } from '@vercel/analytics/react';
import HomeIntro from "../components/home/homeIntro";
import HomeLinks from "../components/home/homeLinks";

const Home = () => {
  return (
    <Fragment>
        <HomeIntro/>
        <HomeLinks />
        <Analytics />
    </Fragment>
  )
}

export default Home;
