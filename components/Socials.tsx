import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx"
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx"
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"

export default function Socials() {
    return (
        <div class={"flex justify-center py-4"}>
            <a href={"https://twiiter.com/Maxence_Jg"}
                class={"p-4 text-white text-gray-600 hover:text-gray-900"}
            >
                <IconBrandTwitter class="w-14 h-14" />
            </a>
            <a href={"https://github.com/FreezingKas"}
                class={"p-4 text-white text-gray-600 hover:text-gray-900"}
            >
                <IconBrandGithub class="w-14 h-14" />
            </a>
            <a href={"https://www.linkedin.com/in/maxence-jung-69501a1a3/"}
                class={"p-4 text-white text-gray-600 hover:text-gray-900"}
            >
                <IconBrandLinkedin class="w-14 h-14" />
            </a>
        </div>
    )
}