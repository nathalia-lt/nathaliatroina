import Section from "./Section";
import {cn} from "@/lib/utils"

export default function ImageSection({ src, alt, className="", maxWidth = null }) {

    const baseClasses="px-5xl";

    const imageClasses = maxWidth ?  maxWidth + " mx-auto block" : "";
    const baseImageClasses = "w-full h-auto mt-8";


    return (
        <Section className={cn(baseClasses, className)}>
            <img
                src={src}
                alt={alt}
                class={cn(baseImageClasses, imageClasses)} 
            />
        </Section>
    );
}