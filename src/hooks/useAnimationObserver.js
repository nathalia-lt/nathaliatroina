import { useEffect, useRef, useState } from 'react';

export function useAnimationObserver(threshold = 0.1, useAnimation = true) {

    const elementRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!useAnimation) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();

    }, []) // array vazio significa que o effeito vai acontecer apenas a primeira vez que o componente for carregado

    return [elementRef, hasAnimated];
}