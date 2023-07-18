import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"
import IconMapPin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx"

export default function Contact() {
    return (
        <div>
            <div class={"flex items-center py-4 px-12 gap-2"}>
                <p class={"text-white text-green-400"}>
                    <IconMail class="w-8 h-8"/>
                </p>
                <p class={"text-white text-gray-600"}>
                    maxence.jung[at]proton.me
                </p>
            </div>
            <div class={"flex items-center py-4 px-12 gap-2"}>
                <p class={"text-white text-green-400"}>
                    <IconMapPin class="w-8 h-8"/>
                </p>
                <p class={"text-white text-gray-600"}>
                    Bretagne - Alsace, France
                </p>
            </div>
        </div>
    )
}