import Section from "./Section";
import {cn} from "@/lib/utils"

export default function ImageSection({ src, alt, className="", maxWidth = null }) {

    const baseClasses="px-0 md:px-5xl bg-white rounded";

    const imageClasses = maxWidth ?  maxWidth + " mx-auto block" : "";
    const baseImageClasses = "w-full h-auto mt-0 md:py-8";

    
    return (
        <Section className={cn(baseClasses, className)}>
            <img
                src={src}
                alt={alt}
                className={cn(baseImageClasses, imageClasses)} 
            />
        </Section>
    );
}