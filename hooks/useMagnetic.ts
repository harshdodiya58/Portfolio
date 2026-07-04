"use client";
import { useRef, useCallback } from "react";
import { useMousePosition } from "./useMousePosition";

export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const mouse = useMousePosition();

  const getTransform = useCallback(() => {
    if (!ref.current) return { x: 0, y: 0 };
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = mouse.x - centerX;
    const distY = mouse.y - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const maxDist = Math.max(rect.width, rect.height) * 2;

    if (dist < maxDist) {
      return {
        x: distX * strength,
        y: distY * strength,
      };
    }
    return { x: 0, y: 0 };
  }, [mouse.x, mouse.y, strength]);

  return { ref, getTransform };
}
