import LayoutGrid from "./LayoutGrid";
import Section from "./Section";
import {TypographyH4, TypographyP, TypographyList} from "./ui/Typography";
import ImpactCard from "./ImpactCard";


export default function ImpactSection({ title, impacts, nextSteps, children }) {

    return (
        <Section title={title}>

            <LayoutGrid>
                {/* <div className="mb-xl">
                    <TypographyP variant="normal"></TypographyP>
                </div> */}
                <div className="grid gri-cols-1 md:grid-cols-2 gap-xl mb-3xl pb-3xl">
                    {impacts.map((item, index) => (
                        <ImpactCard
                            key={index} 
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                

                <TypographyH4>Next Steps</TypographyH4>
                <TypographyList className="mb-sm" list={nextSteps} />
                
                <div className="mt-3xl">
                    <TypographyH4>Reflections</TypographyH4>
                    {children}
                </div>
            
            </LayoutGrid>
        
        </Section>
    )
}