/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";

import * as MainStyles from "./styles";

const Main: FC = (props) => {
  return <MainStyles.Wrapper>{props.children}</MainStyles.Wrapper>;
};

export default Main;
