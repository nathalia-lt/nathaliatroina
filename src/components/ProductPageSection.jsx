import LayoutGrid from "./LayoutGrid";
import Section from "./Section";
import {TypographyH2, TypographyH3, TypographyP} from "./ui/Typography";

export default function ProductPageSection({ title, description, variant="normal", className = "", children }) {
  return (
    <Section title={title}>
      <LayoutGrid>
        <div className="mb-xl">
          {/* essa propriedade dangerouslySetInnerHTML deixa eu renderizar html */}
          <TypographyP variant={variant}><span dangerouslySetInnerHTML={{ __html: description }}></span></TypographyP>
        </div>
        {children}
      </LayoutGrid>
    </Section>
  );
}

