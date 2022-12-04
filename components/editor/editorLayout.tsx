import React, {ComponentProps} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EditorSideMenu from "./editorSideMenu";


const EditorLayout = ({children}: ComponentProps<any>) => {
    return (
        <>
            <div className="flex overflow-hidden bg-white pt-16">
                <EditorSideMenu/>
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"/>
                <div id="main-content" className="h-full w-full relative overflow-y-auto ">
                    <main>
                        {children}
                    </main>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnFocusLoss={false}
                pauseOnHover={true}
                theme={'dark'}
            />
        </>
    );
}

export default EditorLayout;
