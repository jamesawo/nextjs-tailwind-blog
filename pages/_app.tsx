import '../styles/globals.css'
import type {AppProps} from 'next/app'

import Layout from "../components/layout/layout";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {LayoutEnum} from "../lib/types/data.enum";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    getLayoutEnum?: LayoutEnum;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};


const App = ({Component, pageProps}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? (page => page);
    const layoutEnum = Component.getLayoutEnum ?? LayoutEnum.FRONT;
    return (
        <Layout props={layoutEnum}>
            {getLayout(
                <Component {...pageProps} />
            )}
        </Layout>
    );
}

export default App;
