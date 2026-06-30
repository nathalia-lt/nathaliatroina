import { TypographyH2 } from "@/components/ui/Typography.jsx";
import { cn } from '@/lib/utils';
/* 80, 96, 120 de espaco entre as sections, para criar um respiro maior */


function Section({ title = "", children, className="", id="" }) {
  const baseClasses = "mt-4xl md:my-5xl max-w-7xl mx-auto";

  return (
    <section id={id} className={cn(baseClasses, className)} >
      <div className="grid grid grid-cols-12 gap-md">
        {title && <TypographyH2 className="mb-xm md:mb-2xl col-span-12 md:col-span-5">{title}</TypographyH2>}
      </div>
      {children}
    </section>
  );
}

export default Section;