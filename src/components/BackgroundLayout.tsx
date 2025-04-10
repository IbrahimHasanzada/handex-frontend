import { getBackgroundConfig } from "@/utils/manage-background";

export default function BackgroundLayout({
    children,
    pathname
}: {
    children: React.ReactNode,
    pathname: string
}) {
    const { isDarkBackground } = getBackgroundConfig(pathname);

    return (
        <div className="relative min-h-screen">
            <div className={`absolute inset-0 ${isDarkBackground ? 'bg-[#181818]' : 'bg-[rgb(244,245,245,0.7)] '} z-[-1]`}></div>

            <div className={`
            ${isDarkBackground
                    ? "bg-[url('/assets/img/Pattern.png')]"
                    : "bg-[url('/assets/img/background.png')] z-[-2]"
                }
            absolute inset-0  opacity-50  bg-[length:100%]`
            }></div>

            <div className="relative z-0">
                {children}
            </div>
        </div>
    );
}