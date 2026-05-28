import LayoutGrid from "@/components/LayoutGrid";
import {TypographyH3, TypographyH4, TypographyP, TypographyBlockquote, TypographyList} from "@/components/ui/Typography";
import Section from "@/components/Section";


export default function UserInterviews({ description, quotes, findings = [], className = "" }) {
  return (
    <Section>
    <LayoutGrid className={className}>
        <TypographyH3 className="mb-sm">User Interviews</TypographyH3>
        <TypographyP className="mb-sm">{description}</TypographyP>
        {quotes.map((quote, index) => (
          <TypographyBlockquote key={index} author={`Participant ${index + 1}`} className="mb-sm">{quote}</TypographyBlockquote>
        ))}
        {/* adionando uma lista aqui, verificar se fiz certo */}
        <TypographyH4 className="mt-xl">Key Findings</TypographyH4>
        <TypographyList className="mb-sm" list={findings}/>
          
    </LayoutGrid>
    </Section>
  );
}



