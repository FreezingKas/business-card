import IconShieldLock from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/shield-lock.tsx"

export default function Description() {
    const age = new Date().getFullYear() - 2001
    return (
        <div class={"mx-auto flex flex-col justify-center max-w-screen-md py-4 gap-4"}>
            <div class={"flex flex-row justify-center gap-2"}>
                <IconShieldLock class="w-20 h-20 text-green-400"/>
                <div class={"flex flex-col my-auto"}>
                    <h1 class={"text-4xl font-bold text-gray-900"}>FreezingKas</h1>
                    <p class={"text-gray-600 text-lg"}>Cybersecurity Engineer</p>
                </div>
            </div>
            <div class={"flex flex-row justify-center gap-2"}>
                <p class={"mx-auto px-12 text-gray-600"}>
                    Hi, I'm Maxence "FreezingKas" Jung, a {age} years old cybersecurity engineer.
                    I am currently working at <a
                    href={"https://www.credit-agricole.com/marques-et-metiers/toutes-nos-marques/credit-agricole-technologies-et-services"}
                    class={"text-green-500 hover:text-green-700"}>CA-TS</a> as an AppSec engineer
                    and studying at <a href={"https://www-ensibs.univ-ubs.fr/fr/index.html"}
                                       class={"text-green-500 hover:text-green-700"}>ENSIBS</a> in Vannes.
                    Mostly interested in AppSec, DevSecOps and CTFs. I also like developing software for any kind of
                    platform.
                </p>
            </div>
        </div>
    )
}