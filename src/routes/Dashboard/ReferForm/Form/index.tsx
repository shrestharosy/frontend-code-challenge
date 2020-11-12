import React from "react";
import { useForm } from "react-hook-form";

import { SecondaryButton } from "styles/Button";
import { FormRow, FormFooter } from "./styles";
import CustomSelect from "components/CustomSelect";
import useModal from "customHooks/useModal";
import Modal from "components/Modal";
import CustomInputField from "components/CustomInputField";
import { genderOptions } from "constants/options";

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
  const { register, ...rest } = useForm<IReferFormData>();
  const { isOpen, toggle } = useModal();

  const onSubmit = rest.handleSubmit(({ name, email }) => {
    console.log(name, email);
    toggle();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormRow>
        <CustomInputField
          name={"name"}
          placeholder={"Name"}
          register={() => register({ required: true })}
          {...rest}
        />

        <CustomInputField
          name={"email"}
          placeholder={"Email"}
          register={() => register({ required: true })}
          {...rest}
        />
      </FormRow>

      <FormRow>
        <CustomInputField
          name={"phoneNumber"}
          placeholder={"Phone Number"}
          register={() => register({ required: true })}
          {...rest}
        />

        <CustomSelect
          name={"gender"}
          placeholder={"Gender"}
          items={genderOptions}
        />
      </FormRow>

      <FormRow>
        <CustomInputField
          name={"address"}
          placeholder={"Address"}
          register={() => register({ required: true })}
          {...rest}
        />

        <CustomInputField
          name={"others"}
          placeholder={"Apt/Suite/Other"}
          register={() => register({ required: true })}
          {...rest}
        />
      </FormRow>

      <FormFooter>
        <span>Lorem Ipsum dolor</span>
        <SecondaryButton type={"submit"}>Refer</SecondaryButton>
      </FormFooter>
      <Modal isOpen={isOpen} onHide={toggle} message={`Success`} />
    </form>
  );
};

export default Form;
