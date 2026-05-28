import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";

export default function Matrix({title, description, className = ""}) {
  return (
    <Section>
      <Layout>
        <TypographyP>
          {description}
        </TypographyP>
      </Layout>
    </Section>
  );
}     