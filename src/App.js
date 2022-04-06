import React from "react";
import PageTitle from "./components/PageTitle";

import style from "./styles/modules/app.module.scss";

import "./styles/GlobalStyles.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

function App() {
    return (
        <div className="container">
            <PageTitle>Todo List </PageTitle>
            <div className={style.app__wrapper}>
                <AppHeader />
                <AppContent />
            </div>
        </div>
    );
}

export default App;
