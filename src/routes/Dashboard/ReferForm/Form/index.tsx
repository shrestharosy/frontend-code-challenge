import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

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
  gender: string;
  others: string;
}

const Form = () => {
  const { control, register, errors, handleSubmit } = useForm<IReferFormData>({
    mode: "onBlur",
  });

  const { isOpen, toggle } = useModal();
  const [referralName, setReferralName] = useState("");

  const onSubmit = handleSubmit(({ name, email }, e) => {
    setReferralName(name);
    toggle();
    e?.target.reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormRow>
        <Controller
          control={control}
          register={register}
          rules={{
            required: {
              value: true,
              message: "Name is required.",
            },
          }}
          name="name"
          as={
            <CustomInputField
              name={"name"}
              placeholder={"Name"}
              error={errors.name ? errors.name.message : ""}
            />
          }
        />

        <Controller
          control={control}
          register={register}
          rules={{
            required: {
              value: true,
              message: "Email is required.",
            },
          }}
          name="email"
          as={
            <CustomInputField
              name={"email"}
              placeholder={"Email"}
              error={errors.email ? errors.email.message : ""}
            />
          }
        />
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          register={register}
          rules={{
            required: {
              value: true,
              message: "Phone number is required.",
            },
          }}
          name="phoneNumber"
          as={
            <CustomInputField
              name={"phoneNumber"}
              placeholder={"Phone Number"}
              error={errors.phoneNumber ? errors.phoneNumber.message : ""}
            />
          }
        />

        <Controller
          control={control}
          register={register}
          name="gender"
          as={
            <CustomSelect
              name={"gender"}
              placeholder={"Gender"}
              items={genderOptions}
              error={errors.gender ? errors.gender.message : ""}
            />
          }
        />
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          register={register}
          name="address"
          as={
            <CustomInputField
              name={"address"}
              placeholder={"Address"}
              error={""}
            />
          }
        />

        <Controller
          control={control}
          register={register}
          name="others"
          as={
            <CustomInputField
              name={"others"}
              placeholder={"Apt/Suite/Other"}
              error={""}
            />
          }
        />
      </FormRow>

      <FormFooter>
        <span>Lorem Ipsum dolor</span>
        <SecondaryButton type={"submit"}>Refer</SecondaryButton>
      </FormFooter>
      <Modal
        isOpen={isOpen}
        onHide={toggle}
        message={`Congrats Jimmy! You will be notified when ${referralName} signs up.`}
      />
    </form>
  );
};

export default Form;
