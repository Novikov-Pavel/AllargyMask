import React, { useState } from "react";
import HEADER from "../components/header";
import FOOTER from "../components/footer";
import BANNER from "../components/main/banner";
import SECONDDISPLAY from "../components/main/secondDisplay";
import ADVANTAGES from "../components/main/advantages";
import Modal from "../components/modal";
import CALLBACK from "../components/main/modalCallBack";
import CATALOG from "../components/main/catalog";
import ARCTITLES from "../components/main/arcticles";
import FAQ from "../components/main/FAQ";
import SOCIAL from "../components/main/social";
import "../SCSS/Components/main/main.scss";

function Main() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="main">
            <HEADER />
            <BANNER />
            <SECONDDISPLAY />
            <ADVANTAGES />
            <CATALOG />
            <ARCTITLES />
            <FAQ />
            <SOCIAL />
            <FOOTER setActive={setModalActive} />
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </div>
    );
}

export default Main;
