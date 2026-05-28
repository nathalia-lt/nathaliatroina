import { IconRocket, IconUsers, IconCode, IconChartBar, IconHeart } from "@tabler/icons-react";
import{ TypographyH4, TypographyP} from "./ui/Typography";

export default function ImpactCard({ icon, title, description }) {
    const iconsProps = { size: 48, stroke: 1.5, color: "var(--color-tertiary-700)" };
    const icons = {
        "rocket": <IconRocket {...iconsProps} />,
        "users": <IconUsers {...iconsProps} />,
        "chart": <IconChartBar {...iconsProps} />,
        "heart": <IconHeart {...iconsProps} />,
        "code": <IconCode {...iconsProps} />,
    };

    return (
        <div className="flex flex-col items-center gap-sm p-sm ">
            <div className="flex items-center justify-center rounded-xs bg-tertiary-200 px-xs py-2xs mb-2xs">
                {icons[icon]}
            </div>
            <div>
                <TypographyP className="text-center text-body-md font-medium text-neutral-600 ">{title}</TypographyP>
            </div>
            <div>
                <TypographyP className="text-center">{description}</TypographyP>
            </div>
        </div>
    )
}