import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible] — isVisible becomes true when the element
 * enters the viewport for the first time.
 */
const useScrollReveal = (threshold = 0.15) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // trigger only once
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

export default useScrollReveal;
