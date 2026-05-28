import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card.jsx";
import { Badge } from "../components/ui/Badge.js";
import { cn } from "@/lib/utils.js";

function ProjectCard({ title, description, content, imageSrc, imageAlt, imageBgColor, projectUrl, badgesList}) {

    const imageBgClasses = "w-full rounded-sm aspect-[3/2] flex items-center justify-center"

  return (
    <Card className="overflow-hidden border-0 p-md rounded-lg gap-md">
        <a href={projectUrl}>
        <CardHeader className="px-0" mb-0 >
            <div className= {cn(imageBgClasses, imageBgColor)}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full rounded-2xl aspect-[4/2] object-contain"
                />
            </div>
            {/* Badges Position  */}
        </CardHeader>
        <CardContent className="px-0 my-sm">
                <div class="flex flex-wrap gap-2 mb-xl">
                {badgesList.map((badge, index) => (
                    <Badge key={index}>{badge}</Badge>
                ))}
                </div>

                <CardTitle className="font-title tracking-normal font-semibold mb-sm text-neutral-700 text-heading-md">{title}</CardTitle>
                <CardDescription className="font-sans mb-xl text-neutral-600">{description}</CardDescription
                >
            <p class="font-sans  text-body-sm text-muted-foreground text-neutral-600">
            {content}
            </p>
        </CardContent>
        </a>
    </Card>
  );
}

export default ProjectCard;