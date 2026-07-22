import Section from "./Section";
import { TypographyH4, TypographyP, TypographyList } from "./ui/Typography";
import {Button} from "@/components/ui/Button";
import { IconExternalLink } from '@tabler/icons-react';

export default function ProjectOverview({
  timeline, 
  context, 
  problem, 
  problems={}, 
  goals=[], 
  process, 
  prototypeLabel="", 
  prototypeUrl="", 
  tools=[], 
  methodology="", 
  results=[],

  col1= ['timeline', 'context', 'problem'],
  col2= ['goals', 'process', 'prototype', 'tools', 'methodology', 'results']
}) {
  
  const data = {
    timeline, context, problem, problems, goals, process, prototypeLabel, prototypeUrl, tools, methodology, results
  }

  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-2xs md:gap-5xl">
        {/* coluna 1 */}
        <div className="flex-1 ">
            <RenderCol colItems={col1}  data={data} />
        </div>

        {/* coluna 2 */}
        <div  className="flex-1 ">
            <RenderCol colItems={col2}  data={data} />
        </div>
      </div>
    </Section>
  )
}

const RenderText = ({text}) => {

  return (
    <div>
      <TypographyP className="mt-xs mb-xl"><span dangerouslySetInnerHTML={{ __html: text }}></span></TypographyP>
    </div>
  )
}

const RenderCol = ({colItems, data}) => {

  const renderItem = (item, index) => {

    switch (item) {

      case 'timeline':
        return (
          <>
            <TypographyH4>Timeline</TypographyH4>
            <RenderText text={data.timeline} />
          </>
        )

      case 'context':
        return (
          <>
            <TypographyH4>Context</TypographyH4>
            <RenderText text={data.context} />
          </>
        )

      case 'problem':
        return (
          <>
            <TypographyH4>Problem</TypographyH4>
            <RenderText text={data.problem} />
            {data.problems.length > 0 && (
              <div>
                <TypographyList className="mt-xs mb-xl" list={data.problems} />
              </div>
            )}
          </>
        )

      case 'goals':
        return (
          <>
            <TypographyH4>Goals</TypographyH4>
            <div>
              <TypographyList className="mt-xs mb-xl" list={data.goals} />
            </div>
          </>
          )   

      
      case 'process':
        return (
          <>
            <TypographyH4>Process</TypographyH4>
            <RenderText text={data.process} />
          </>
        )


      case 'prototype':
        return (
          <>
          { data.prototypeUrl && (
          <div className="mb-xl">
            <TypographyH4>Prototype</TypographyH4>
            <Button variant="link" size="lg" className="px-0 text-body-sm dark:text-primary-600"  asChild>
              <a href={data.prototypeUrl} target="_blank" className="dark:text-primary-600">
                {data.prototypeLabel}
                <IconExternalLink stroke={2} />
              </a>
            </Button>
          </div> 
          )}
          </>
        )

      case 'methodology':
        return (
          <>
          {data.methodology && (
          <>
            <TypographyH4>Methodology</TypographyH4>
            <RenderText text={data.methodology} />
          </>
          )}
          </>
        )

      case 'tools':
        return (
          <>
          {data.tools.length > 0 && (
          <>
            <TypographyH4>Tools</TypographyH4>
            <RenderText text={data.tools.join(", ")} />
          </>
          )}
          </>
        )

        case 'results':
        return (
          <>
          {data.results.length > 0 && (
          <>
            <TypographyH4>Outcomes</TypographyH4>
            <div>
              <TypographyList className="mt-xs mb-xl" list={data.results} />
            </div>
          </>
          )}
          </>
        )
      }
  }


  return (
  <>

    {colItems.map((item, index) => (
      <div key={index}>
        {renderItem(item, index)}
      </div>
    )
    )}
   </> 
  )
}





  







