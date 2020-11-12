import React from "react";
import { useForm } from "react-hook-form";

import { CustomInput } from "../../../../styles/Input";
import { SecondaryButton } from "styles/Button";
import { FormRow, FormFooter, Blah } from "./styles";
import CustomSelect from "components/CustomSelect";
import useModal from "customHooks/useModal";
import Modal from "components/Modal";
import CustomInputField from "components/CustomInputField";

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

  const itemToString = (i: any) => {
    return i ? i.name : "";
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <Blah>
        <label htmlFor="" className={"custom-field active error"}>
          <input type="text" ref={register({ required: true })} />
          <span className="placeholder">Name</span>
        </label>
        <span className={"text-error"}>Name is required</span>
      </Blah> */}

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
          items={[
            { id: "1", name: "One" },
            { id: "2", name: "Two" },
          ]}
          itemToString={itemToString}
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

      {/* <FormRow>
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
      </FormRow> */}
      {/* 

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
      </FormRow> */}

      <FormFooter>
        <span>Lorem Ipsum dolor</span>
        <SecondaryButton type={"submit"}>Refer</SecondaryButton>
      </FormFooter>
      <Modal isOpen={isOpen} onHide={toggle} message={`Success`} />
    </form>
  );
};

export default Form;
