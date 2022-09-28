// Check if an element is in view using Intersection Observer
import { RefObject, useEffect, useRef, useState } from "react";

/**
 * Returns a ref object and a boolean.
 * Assign the ref object to an element, and the boolean will be `true` when the element is present on the viewport.
 */
const useInView = (): [RefObject<HTMLDivElement>, boolean] => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const callbackFn: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    // Create an Intersection Observer with default options
    // Root: Viewport, rootMargins: 0, Threshold: 0
    const observer = new IntersectionObserver(callbackFn);
    const element = elementRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  });

  return [elementRef, isInView];
};

export { useInView };
