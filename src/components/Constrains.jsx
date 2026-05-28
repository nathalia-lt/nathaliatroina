import LayoutGrid from "./LayoutGrid";
import Section from "./Section";
import {TypographyH2, TypographyH3, TypographyP} from "./ui/Typography";

export default function Constrains({ title, description, className = "" }) {
  return (
    <Section title="Constrains">
      <LayoutGrid>
        <div>
          <TypographyH2>{title}</TypographyH2>
        </div>
        <div>
          <TypographyP variant="body1">{description}</TypographyP>
        </div>
      </LayoutGrid>
    </Section>
  );
}

// trocar o titulo por descricao, e a descricao por bullet points.