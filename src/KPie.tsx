import * as React from "react";
import { EasyPieChart } from "easy-pie-chart-typescript";

interface KPieProps {
  value: number | string;
  target: number;
  threshold: number;
  options?: any;
}

function useOnMount(callback: React.EffectCallback) {
  React.useEffect(callback, []);
}

export const KPie: React.FC<KPieProps> = props => {
  const divEl = React.useRef<HTMLDivElement>(null);

  useOnMount(() => {
    new EasyPieChart(divEl.current, props.options);
  });

  return <div ref={divEl} className="kpie" data-percent={props.value}></div>;
};
