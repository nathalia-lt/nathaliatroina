import Section from "./Section";
import {cn} from "@/lib/utils"
import { useAnimationObserver } from "@/hooks/useAnimationObserver";

export default function ImageSection({ src, alt, className="", maxWidth = null, useAnimation = false }) {

    const baseClasses="px-0 md:px-5xl bg-white rounded";

    const imageClasses = maxWidth ?  maxWidth + " mx-auto block" : "";
    const baseImageClasses = "w-full h-auto mt-0 p-2 md:py-8";


    const [elementRef, hasAnimated] = useAnimationObserver(0.5, useAnimation);
    
    // const hasAnimated = false;

    return (
        <Section className={cn(baseClasses, className)}>
            <img
                ref={elementRef} 
                src={src}
                alt={alt}
                className={cn(baseImageClasses, imageClasses, useAnimation ? "opacity-0" : " ", hasAnimated ? "animate-fade-in" : "")} 
            />
        </Section>
    );
}