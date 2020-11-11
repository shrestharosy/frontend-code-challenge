import React from "react";

import Section from "components/Section";
import Form from "./Form";
import { ReferralContainer } from "./styles";

const ReferForm = () => {
  return (
    <Section
      title={"Refer and Earn"}
      description={"Add your reference and earn 5$ after they sign up."}
    >
      <span className={"m-b-16 sm-14"}>Basic Information</span>
      <ReferralContainer>
        <Form />
        <div className={"image"}>
          <img src="assets/svg/form.svg" alt="form" />
        </div>
      </ReferralContainer>
    </Section>
  );
};

export default ReferForm;
