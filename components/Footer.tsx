"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";

const Footer = () => {
    const color = useParams()?.slug === "white" ? "text-black" : "text-white";

    return (
        <div
            className={clsx(
                "fixed bottom-2 w-full flex justify-between items-center md:px-20 px-5 md:text-xs text-[10px] md:tracking-widest",
                color
            )}
        >
            {/* LEFT SIDE */}
            <div className="flex items-center md:gap-5 gap-2 text-nowrap">
                <p className="hover-animation">© 2025 ADIDAS AG</p>
                <p className="hover-animation">TERMS & CONDITIONS</p>
                <p className="hover-animation">PRIVACY</p>
                <p className="hover-animation">COOKIES</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="hover-animation">
                <p>Created by Samir Ansari</p>
            </div>
        </div>
    );
};

export default Footer;
