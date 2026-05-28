import { TypographyH2, TypographyH3, TypographyP, TypographyBlockquote, TypographyList } from "./ui/Typography"



export default function UserBlock({title, description, userquote}) {
    return (
            <div className="flex flex-col gap-xl">
                <TypographyH2 className="">{title}</TypographyH2>
                <TypographyP className="text-primary-500 font-semibold">{description}</TypographyP>

                <TypographyBlockquote className="">{userquote}</TypographyBlockquote>
                <TypographyBlockquote className="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan convallis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.”</TypographyBlockquote>
                <TypographyBlockquote className="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan convallis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.”</TypographyBlockquote>
                
                <TypographyH3 className="">Key Takeaways</TypographyH3>
                <TypographyList className="">{description}</TypographyList>
                <ul className="list-disc pl-5">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul
            </div>
    )
}