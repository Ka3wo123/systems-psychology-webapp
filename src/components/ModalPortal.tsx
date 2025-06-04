import { useEffect, useRef } from "preact/hooks";
import { createPortal } from "preact/compat";

interface ModalPortalProps {
  children: preact.ComponentChildren;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    const el = elRef.current!;
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
}
