interface IBreakpoints {
  [key: string]: number;
}

export const breakpoints: IBreakpoints = {
  small: 600,
  medium: 768,
  large: 1200,
};

export const mq = (device: string) => {
  return `@media (min-width: ${breakpoints[device]}px)`;
};
