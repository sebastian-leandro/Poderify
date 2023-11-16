"use client"
import { useEffect,useState } from "react";


export function MobileWidth() {
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        const handleWidth = () => window.innerWidth <= 1024 ? setIsMobile(true) : setIsMobile(false);
        handleWidth();

        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    }, [])

    return isMobile
}