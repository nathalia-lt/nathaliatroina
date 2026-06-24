// responsivo 0 pra 12 md 5 para 7

import { useAnimationObserver } from "@/hooks/useAnimationObserver";

export default function LayoutGrid({ children, className = "" }) {

  const [elementRef, hasAnimated] = useAnimationObserver();

  return (
    <div className="grid grid-cols-12 gap-md">
        <div className="col-span-0 md:col-span-5"></div>
        <div ref={elementRef} className={`col-span-12 md:col-span-7 ${hasAnimated ? 'animate-slide-from-right': ''}`}>{children}</div>
    </div>
  );
}