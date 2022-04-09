import React from "react";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

import style from "./styles/modules/app.module.scss";

import "./styles/GlobalStyles.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

function App() {
    return (
        <>
            <div className="container">
                <PageTitle>Todo List - React Redux </PageTitle>
                <div className={style.app__wrapper}>
                    <AppHeader />
                    <AppContent />
                </div>
            </div>
            <Toaster
                position="bottom-right"
                style={{
                    fontSize: "1.4rem",
                }}
            />
        </>
    );
}

export default App;
