interface IBreakpoints {
  [key: string]: number;
}

const breakpoints: IBreakpoints = {
  small: 500,
  medium: 768,
  large: 1200,
};

export const mq = (device: string) => {
  return `@media (min-width: ${breakpoints[device]}px)`;
};
