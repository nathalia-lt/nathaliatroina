import  Section  from "./Section";
import { TypographyH1, TypographyP } from "./ui/Typography";



export default function ProjectHero({title, subtitle, year, role, imageSrc, imageAlt=""}) {
    return (
        <Section>
            <div className="text-center">
                <TypographyH1 className="">{title}</TypographyH1>
                <TypographyP variant="large" className="">
                    {subtitle}
                </TypographyP>
                <TypographyP
                    className="flex gap-sm justify-center mb-4xl">
                        <span><strong>Year</strong> <span>{year}</span></span>
                        <span>•</span> 
                        <span><strong>My Role</strong> <span>{role}</span></span>
                </TypographyP>
                <img src={imageSrc} alt={title}/>
            </div>
        </Section>
    )
}