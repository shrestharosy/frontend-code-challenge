/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardIcon,
} from "./styles";
import { FC } from "react";

interface ICardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: FC<ICardProps> = ({ imageUrl, title, description }) => (
  <CardWrapper>
    <CardImage>
      <img src={imageUrl} alt={title} />
    </CardImage>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardBody>
    <CardIcon>
      <i className={`fa fa-long-arrow-right fa-lg`} aria-hidden="true"></i>
    </CardIcon>
  </CardWrapper>
);

export default Card;
