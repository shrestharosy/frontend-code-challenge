import React, { FC, useState } from "react";

import Downshift from "downshift";
import { Menu, Item, SelectInputWrapper } from "./styles";
import { CustomInput } from "components/CustomInputField/styles";
import { IDropdownOption } from "constants/options";

interface ICustomSelectProps {
  name: string;
  placeholder: string;
  items: Array<IDropdownOption>;
  error: string | undefined;
}

const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const { name, placeholder, items, error } = props;

  const [isActive, setIsActive] = useState(false);
  const [gender, setGender] = useState("");

  const mapOptionToName = (option: IDropdownOption | null) => {
    return option ? option.name : "";
  };

  return (
    <div>
      <Downshift itemToString={mapOptionToName}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          toggleMenu,
          selectedItem,
        }) => (
          <div>
            <SelectInputWrapper>
              <CustomInput>
                <label
                  htmlFor=""
                  className={`custom-field ${isActive ? "active" : ""}`}
                >
                  <span className="placeholder">{placeholder}</span>
                  <input
                    readOnly={true}
                    style={{ cursor: "pointer" }}
                    onChange={(e) => setGender(e.currentTarget.value)}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    onClick={() => toggleMenu()}
                    {...getInputProps({
                      name,
                    })}
                  />
                </label>
                {error && gender.trim().length === 0 && (
                  <span className={"text-error"}>Gender is required</span>
                )}
              </CustomInput>
            </SelectInputWrapper>

            {isOpen && (
              <Menu>
                {items.map((item, index) => (
                  <Item
                    key={item.id}
                    {...getItemProps({
                      item,
                      index,
                      isSelected: selectedItem === item,
                    })}
                  >
                    <span>{item.name}</span>
                  </Item>
                ))}
              </Menu>
            )}
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default CustomSelect;
