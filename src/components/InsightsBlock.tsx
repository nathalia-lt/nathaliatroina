import LayoutGrid from "./LayoutGrid";
import  Section  from "./Section";
import { TypographyH2, TypographyP } from "./ui/Typography";
import { IconRocket , IconBulb, IconUsers } from "@tabler/icons-react";



export default function InsightsBlock({ description, icon}) {
    const iconsProps = { size: 48, stroke: 1.5, color: "var(--color-secondary-700)" };
    const icons = {
        "rocket": <IconRocket {...iconsProps} />,
        "bulb": <IconBulb {...iconsProps} />,
        "users": <IconUsers {...iconsProps} />
    }
    return (

        <div className="flex flex-col md:flex-row items-center gap-md border rounded-md p-sm bg-card">
            <div className="flex items-center justify-center rounded-xs bg-secondary-100 px-xs py-2xs">
                {icons[icon]}
            </div>
            <div>
                <TypographyP className="text-center md:text-left"><span dangerouslySetInnerHTML={{ __html: description }}></span></TypographyP>
            </div>    
        </div>
  
    )
}

