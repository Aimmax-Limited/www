import { Facebook, Instagram, Twitter, LinkedIn } from "./icons";

export function SocialMediaBar() {
    return (
        <div className="flex flex-col items-center gap-4 p-4 mt-3">
            <div className="flex gap-6">
                <Facebook/>
                <Instagram/>
                <LinkedIn/>
                <Twitter/>
            </div>
            <div className="w-fit h-0.5 bg-[#ddd] mt-2"></div>
        </div>
    )
}