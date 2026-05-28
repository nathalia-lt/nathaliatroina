import { TypographyP } from "./ui/Typography";
import LayoutGrid from "./LayoutGrid";


// sempre que faz um map colocar uma key unica
export default function SurveyCardsContainer({ cards=[], className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 mt-sm ${className}`}>
      {cards.map((card, index) => (
        <div key={index}>
          <TypographyP variant="large" className="text-neutral-600 font-medium">{card.title}</TypographyP>
          <div>
            <TypographyP className=" mb-md">{card.description}</TypographyP>
          </div>
        </div>
      ))}
    </div>   
  );
}

// no componente original do typographyP, quando nao é o primeiro filho, ele adiciona margin, por isso adionar a div no segundo P, para eliminar essa "regra".