import { IconMail, IconBrandGithub, IconBrandLinkedin, IconFileText } from "@tabler/icons-react";
import {TypographyH3, TypographyP} from "./ui/Typography";


export default function Footer() {
  const linkicons = [
    {
      href: "mailto:nathaliatroina@gmail.com",
      icon: <IconMail size={32} stroke={1.5} />,
      label: "Email"
    },
    {
      href: "https://github.com/nathaliatroina",
      icon: <IconBrandGithub size={32} stroke={1.5} />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/nathaliatroina",
      icon: <IconBrandLinkedin size={32} stroke={1.5} />,
      label: "LinkedIn"
    },
    {
      href: "/nathaliatroina/nathaliatroinaresume.pdf",
      icon: <IconFileText size={32} stroke={1.5} />,
      label: "Resume"
    }
  ];

  return (
    <footer id="contact" className="w-full border-t border-neutral-500 bg-neutral-100 ">
      <div className=" py-4xl">
        <div className="px-xl max-w-7xl mx-auto flex flex-col items-center gap-3xl md:flex-row md:justify-between">
          
          {/* Left side */}
          <div className="text-center md:text-left grow">
            <TypographyH3>Let's Connect!</TypographyH3>
            <TypographyP className="max-w-[485px]">
              I am currently looking for opportunities for work and would be happy to collaborate.
            </TypographyP>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center gap-xl">
          {linkicons.map((linkicon) => (
            <a
              key={linkicon.label}
              href={linkicon.href}
              target="_blank"
              className="transition-colors text-neutral-500 hover:text-primary-500"
              aria-label={linkicon.label}
            >
              <div className="flex flex-col items-center justify-center gap-xs">
                {linkicon.icon}
                {linkicon.label}
              </div>
            </a>
          ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="my-4xl border-t border-neutral-500 pt-xl text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Designed and Built by Nathalia Troina — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
