import React from "react";
import { useForm } from "react-hook-form";

import { CustomInput } from "../../../../styles/Input";
import { SecondaryButton } from "styles/Button";
import { FormRow, FormFooter } from "./styles";

interface FormData {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  others: string;
}

const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ name, email }) => {
    console.log(name, email);
  });

  return (
    <form onSubmit={onSubmit}>
      <FormRow>
        <CustomInput name="name" placeholder={"Name"} ref={register} />
        <CustomInput
          name="email"
          placeholder={"Email"}
          ref={register({ required: true })}
        />
        {errors.email && "Last name is required."}
      </FormRow>

      <FormRow>
        <CustomInput
          name="phoneNumber"
          placeholder={"Phone Number"}
          ref={register}
        />
        <CustomInput name="gender" placeholder={"Name"} ref={register} />
      </FormRow>

      <FormRow>
        <CustomInput name="address" placeholder={"Address"} ref={register} />
        <CustomInput
          name="others"
          placeholder={"Apt/Suite/Other"}
          ref={register}
        />
      </FormRow>

      <FormFooter>
        <span>Lorem Ipsum dolor</span>
        <SecondaryButton type={"submit"}>Refer</SecondaryButton>
      </FormFooter>
    </form>
  );
};

export default Form;
