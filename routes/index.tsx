import {Head} from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Socials from "../components/Socials.tsx";
import Separator from "../components/Separator.tsx";
import Description from "../components/Description.tsx";
import Contact from "../components/Contact.tsx";
import Skills from "../components/Skills.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>FreezingKas Business Card</title>
                <link rel={"stylesheet"} href={"/main.css"}/>
            </Head>
            <div>
                <Header/>
                <Socials/>
                <Separator/>
                <Description/>
                <Contact/>
                <Separator/>
                <Skills/>
            </div>
        </>
    );
}
