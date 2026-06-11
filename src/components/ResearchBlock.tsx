import Section from "./Section";
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "./ui/Typography";
import LayoutGrid from "./LayoutGrid";

export default function ResearchBlock({title, items, children}: {title: string, items: {title: string, description: string}[], children?: React.ReactNode}) {
    
    return (
        <Section title={title}>
            <LayoutGrid>
                {items.map((item, index) => (
                    <div key={index} className="mb-xl">
                        <TypographyH3 className="">{item.title}</TypographyH3>
                        <div className="mt-sm">
                        <TypographyP className="">{item.description}</TypographyP>
                        </div>    
                    </div>
                ))}
            </LayoutGrid>
            <div>
                {children}
            </div>
        </Section>
    )
}