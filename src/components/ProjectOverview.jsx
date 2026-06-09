import Section from "./Section";
import { TypographyH4, TypographyP, TypographyList } from "./ui/Typography";
import {Button} from "@/components/ui/Button";

export default function ProjectOverview({timeline, context, problem, problems={}, goals=[], process, prototypeLabel="", prototypeUrl="", tools=[], methodology=""}) {
  
  return (
    <Section>
      <div className="flex gap-3xl">
        {/* coluna 1 */}
        <div className="flex-1 pl-2xl">
          <TypographyH4>Timeline</TypographyH4>
          <RenderText text={timeline} />

          <TypographyH4>Context</TypographyH4>
          <RenderText text={context} />

          <TypographyH4>Problem</TypographyH4>
          <RenderText text={problem} />
          {problems.length > 0 && <>
          <div>
            <TypographyList className="mt-xs mb-xl" list={problems} />
          </div>
          </>}
          
        </div>
        {/* coluna 2 */}
        <div  className="flex-1 pr-2xl">
          <TypographyH4>Goals</TypographyH4>
          <div>
            <TypographyList className="mt-xs mb-xl" list={goals} />
          </div>

          <TypographyH4>Process</TypographyH4>
          <RenderText text={process} />

          { prototypeUrl && (
            <div className="mb-xl">
              <TypographyH4>Prototype</TypographyH4>
              <Button variant="link" size="lg" className="px-0 text-body-sm"  asChild>
                <a href={prototypeUrl} target="_blank" className="">{prototypeLabel}</a>
              </Button>
            </div> 
          )}

          {methodology && (
            <>
              <TypographyH4>Methodology</TypographyH4>
              <RenderText text={methodology} />
            </>
          )}

          {tools.length > 0 && (
            <>
              <TypographyH4>Tools</TypographyH4>
              <RenderText text={tools.join(", ")} />
            </>
          )}
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














  








// Versao ultraminimalista

// export default function ProjectOverview() {
//     return (
//         <section class="w-full py-20">
//   <div class="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-16 md:grid-cols-2">

//     {/* left column */}
//     <div class="space-y-12">
//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">Year</h6>
//         <p class="mt-1 text-neutral-200">
//           <time datetime="2025-01-01">2025</time>
//         </p>
//       </div>

//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">Project Context</h6>
//         <p class="mt-1 text-neutral-300 leading-relaxed">
//           The smart‑ring health market is evolving fast, but users still struggle to interpret metabolic data in a meaningful, actionable way. This project explores how to redesign the experience to make health insights clearer and easier to act on.
//         </p>
//       </div>

//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">Timeline</h6>
//         <p class="mt-1 text-neutral-300">3 months</p>
//       </div>
//     </div>

//     {/* Right column */}
//     <div class="space-y-12">
//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">My Role</h6>
//         <p class="mt-1 text-neutral-300">
//           UX/UI Design, User Research, Information Architecture, Prototyping.
//         </p>
//       </div>

//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">Methods</h6>
//         <p class="mt-1 text-neutral-300 leading-relaxed">
//           Desk research, competitive analysis, interviews, heuristic evaluation, JTBD, HMW, prioritization frameworks, journey mapping, usability testing.
//         </p>
//       </div>

//       <div>
//         <h6 class="text-xs uppercase tracking-wider text-neutral-500">Prototype</h6>
//         <a
//           href="https://www.figma.com/proto/CkRofEDoXGmv43ouVaAaDH/ultrahuman-case-study"
//           target="_blank"
//           class="mt-1 inline-block text-neutral-200 underline underline-offset-4 hover:text-white"
//         >
//           View Figma Prototype
//         </a>
//       </div>
//     </div>
//   </div>


//   {/* second row */}
//   <div class="mx-auto max-w-6xl px-6 mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
//     <div>
//       <h6 class="text-xs uppercase tracking-wider text-neutral-500">Problem</h6>
//       <p class="mt-1 text-neutral-300 leading-relaxed">
//         Users struggle to understand the <strong class="text-white">practical meaning</strong> of the metabolic data because metrics are presented in a technical, decontextualized way, reducing comprehension and long‑term engagement.
//       </p>
//     </div>

//     <div>
//       <h6 class="text-xs uppercase tracking-wider text-neutral-500">Goals</h6>
//       <ul class="mt-1 space-y-2 text-neutral-300 leading-relaxed">
//         <li>Design a dashboard focused on actionable meaning</li>
//         <li>Implement a layered visualization model</li>
//         <li>Improve the meal‑tracking experience</li>
//       </ul>
//     </div>
//   </div>
// </section>

//     )
// }