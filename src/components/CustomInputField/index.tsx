import React, { FC, useState } from "react";

import { CustomInput } from "./styles";

interface ICustomInputFieldProps {
  //  extends UseFormMethods<IReferFormData>
  name: string;
  placeholder: string;
  error: string | undefined;
}

const CustomInputField: FC<ICustomInputFieldProps> = (props: any) => {
  const { name, placeholder, error, register } = props;

  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <CustomInput>
      <label
        htmlFor=""
        className={`custom-field ${
          text.trim().length > 0 || isActive ? "active" : ""
        } ${error ? "error" : ""}`}
      >
        <span className="placeholder">{placeholder}</span>
        <input
          type="text"
          name={name}
          ref={register}
          onChange={(e) => setText(e.currentTarget.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </label>
      {error && <span className="text-error">{error}</span>}
    </CustomInput>
  );
};

export default CustomInputField;
