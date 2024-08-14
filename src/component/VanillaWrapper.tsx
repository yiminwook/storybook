import { useEffect, useRef } from "react";

type VanillaWrapperProps = {
  initiator: (div: HTMLDivElement) => void;
};

export default function VanillaWrapper({ initiator }: VanillaWrapperProps) {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return <div ref={wrapper} />;
}
