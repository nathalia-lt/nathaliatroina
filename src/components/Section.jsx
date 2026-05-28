import { TypographyH2 } from "@/components/ui/Typography.jsx";
import { cn } from '@/lib/utils';
/* 80, 96, 120 de espaco entre as sections, para criar um respiro maior */


function Section({ title = "", children, className="" }) {
  const baseClasses = "my-5xl max-w-7xl mx-auto";

  return (
    <section className={cn(baseClasses, className)} >
      {title && <TypographyH2 className="mb-2xl">{title}</TypographyH2>}
      {children}
    </section>
  );
}

export default Section;