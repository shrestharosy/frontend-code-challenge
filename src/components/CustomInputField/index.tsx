import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { CustomInput } from "styles/Input";
import { IReferFormData } from "routes/Dashboard/ReferForm/Form";

interface ICustomInputFieldProps {
  name: string;
  placeholder: string;
  errorMessage: string;
  isRequired?: boolean;
}

const CustomInputField: FC<ICustomInputFieldProps> = (props) => {
  const { name, placeholder, isRequired = false, errorMessage } = props;
  const { register, handleSubmit, errors } = useForm<IReferFormData>();

  return (
    <>
      <CustomInput
        name={name}
        placeholder={placeholder}
        ref={register({ required: isRequired })}
      />
      {errorMessage ? <span>{errorMessage}</span> : ""}
    </>
  );
};

export default CustomInputField;
