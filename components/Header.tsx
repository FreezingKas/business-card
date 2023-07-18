import IconShare from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/share.tsx"

export default function Header() {
    return (
        <div>
            <div class="p-6 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500">
                <a href={"https://google.com"}
                    class={"text-white text-gray-600 hover:text-gray-900"}
                >
                    <IconShare class="w-9 h-9" />
                </a>
            </div>

            <div class="mx-auto flex justify-center max-w-screen-md">
                <img
                    className="rounded-full border-4 -mt-16 border-slate-100"
                    src="/picture.jpg"
                    class="w-32 h-32"
                    alt="Profile picture of FreezingKas"
                />
            </div>
        </div>

    )
}