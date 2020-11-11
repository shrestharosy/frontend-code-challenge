import React from "react";
import { useForm } from "react-hook-form";
import Downshift from "downshift";

import { CustomInput } from "../../../../styles/Input";
import { SecondaryButton } from "styles/Button";
import { FormRow, FormFooter } from "./styles";
import CustomSelect from "components/CustomSelect";

export interface IReferFormData {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  others: string;
}

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

const Form = () => {
  const { register, handleSubmit, errors } = useForm<IReferFormData>();

  const onSubmit = handleSubmit(({ name, email }) => {
    console.log(name, email);
  });

  console.log(errors);

  const itemToString = (i: any) => {
    return i ? i.name : "";
  };

  return (
    <form onSubmit={onSubmit}>
      <FormRow>
        <CustomInput
          name="name"
          placeholder={"Name"}
          ref={register({ required: true })}
        />
        {errors.name && "Name is required."}

        <CustomInput
          name="email"
          placeholder={"Email"}
          ref={register({ required: true })}
        />
        {errors.email && "Email is required."}
      </FormRow>

      <FormRow>
        <CustomInput
          name="phoneNumber"
          placeholder={"Phone Number"}
          ref={register({ required: true })}
        />
        {errors.phoneNumber && "Phone number is required"}

        <CustomSelect
          name={"gender"}
          placeholder={"Gender"}
          items={[
            { id: "1", name: "One" },
            { id: "2", name: "Two" },
          ]}
          itemToString={itemToString}
        />
      </FormRow>

      <FormRow>
        <CustomInput
          name="address"
          placeholder={"Address"}
          ref={register({ required: true })}
        />
        {errors.address && "Address is required"}

        <CustomInput
          name="others"
          placeholder={"Apt/Suite/Other"}
          ref={register({ required: true })}
        />
        {errors.others && "Required"}
      </FormRow>

      <FormFooter>
        <span>Lorem Ipsum dolor</span>
        <SecondaryButton type={"submit"}>Refer</SecondaryButton>
      </FormFooter>
    </form>
  );
};

export default Form;
