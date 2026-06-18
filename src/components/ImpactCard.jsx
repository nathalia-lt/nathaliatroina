import { IconRocket, IconUsers, IconCode, IconChartBarPopular, IconTrophy ,IconHeart, IconFlame, IconTrendingUp, IconTargetArrow, IconMapPin, IconMessageShare, IconTags, IconBolt, IconDimensions, IconHierarchy2, IconEyeCheck, IconHealthRecognition  } from "@tabler/icons-react";
import{ TypographyH4, TypographyP} from "./ui/Typography";

export default function ImpactCard({ icon, title, description }) {
    const iconsProps = { size: 48, stroke: 1.5, color: "var(--color-tertiary-700)" };
    const icons = {
        "rocket": <IconRocket {...iconsProps} />,
        "users": <IconUsers {...iconsProps} />,
        "chart": <IconChartBarPopular {...iconsProps} />,
        "heart": <IconHeart {...iconsProps} />,
        "code": <IconCode {...iconsProps} />,
        "trophy": <IconTrophy {...iconsProps} />,
        "flame": <IconFlame {...iconsProps} />,
        "trending": <IconTrendingUp {...iconsProps} />,
        "target": <IconTargetArrow {...iconsProps} />,
        "map": <IconMapPin {...iconsProps} />,
        "message": <IconMessageShare {...iconsProps} />,
        "tags": <IconTags {...iconsProps} />,
        "bolt": <IconBolt {...iconsProps} />,
        "dimensions": <IconDimensions {...iconsProps} />,
        "hierarchy": <IconHierarchy2 {...iconsProps} />,
        "accessibility": <IconEyeCheck {...iconsProps} />,
        "cognitive-load": <IconHealthRecognition {...iconsProps} />,
    };

    return (
        <div className="flex flex-col items-center gap-sm p-sm rounded-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-center rounded-xs bg-tertiary-100 px-xs py-2xs mb-2xs transition-transform duration-300 group-hover:scale-110">
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