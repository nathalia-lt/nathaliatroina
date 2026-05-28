import Section from "./Section";
import { TypographyH2, TypographyH3, TypographyP } from "./ui/Typography";

export default function JorneyMap({title, description}) {
    return (
        <Section>
            <div>
                <TypographyH2 className="">{title}</TypographyH2>
            </div>
            <div className="flex items-start gap-xl">
                <TypographyH3 className="">Takeaways</TypographyH3>
                <TypographyP className="">{description}</TypographyP>
            </div>
            <img src="" alt="Journey Map" />
        </Section>
    )
}