/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";

import { SectionWrapper, SectionHeading } from "./styles";
import { SubHeading } from "styles/Typography";

export interface ISectionProps {
  title: string;
  description: string;
}

const Section: FC<ISectionProps> = ({ title, description, children }) => (
  <SectionWrapper>
    <SectionHeading>{title}</SectionHeading>
    <SubHeading className={"m-b-20"}>{description}</SubHeading>
    {children}
  </SectionWrapper>
);

export default Section;
