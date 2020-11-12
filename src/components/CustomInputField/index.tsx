import React, { FC, useState } from "react";

import { CustomInput } from "./styles";
import { UseFormMethods } from "react-hook-form";
import { IReferFormData } from "routes/Dashboard/ReferForm/Form";

interface ICustomInputFieldProps extends UseFormMethods<IReferFormData> {
  name: string;
  placeholder: string;
}

const CustomInputField: FC<ICustomInputFieldProps> = (props) => {
  const { name, placeholder, errors, register, ...rest } = props;

  const [text, setText] = useState("");

  return (
    <>
      <CustomInput>
        <label
          htmlFor=""
          className={`custom-field ${text.length > 0 ? "active" : ""}`}
        >
          <span className="placeholder">{placeholder}</span>
          <input
            type="text"
            ref={register}
            {...rest}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        </label>
      </CustomInput>
    </>
  );
};

export default CustomInputField;
