import Section from "./Section";
import { TypographyH2,TypographyH3, TypographyP, TypographyList } from "./ui/Typography";
import { IconRocket , IconChartLine, IconUsers, IconEmpathize, IconChartBarPopular, IconCode } from "@tabler/icons-react";

export default function Takeaways({title, description, icon}) {
    const icons = {
        "code": <IconCode size={32} stroke={1.5} />,
        "chartline": <IconChartLine size={32} stroke={1.5} />,
        "users": <IconUsers size={32} stroke={1.5} />,
        "empathize": <IconEmpathize size={32} stroke={1.5} />,
        "chartbarpopular": <IconChartBarPopular size={32} stroke={1.5} />
    }
    return (
        <Section>
            <div>
                <TypographyH2 className="">{title}</TypographyH2>
            </div>
            <div className="flex items-start gap-xl">
                {icons[icon]}
                <TypographyP className="">{description}</TypographyP>
            </div>
            <div>
                <TypographyH3 className="">Next Steps</TypographyH3>
                <TypographyList className="">
                    <li>Finding 1</li>
                    <li>Finding 2</li>
                    <li>Finding 3</li>
                </TypographyList>
            </div>
            <div>
                <TypographyH3 className="">Reflections</TypographyH3>
                <TypographyList className="">
                    <li>Reflection 1</li>
                    <li>Reflection 2</li>
                    <li>Reflection 3</li>
                </TypographyList>
            </div>            
        </Section>
    );
}

// map na lista de next steps e reflections, para que seja dinamico, e nao fixo.opcao de nao ter lista e sim paragrafo.