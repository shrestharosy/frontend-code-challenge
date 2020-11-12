import React, { FC } from "react";

import Downshift from "downshift";
import { Menu, Item, SelectInputWrapper } from "./styles";
import { CustomInput } from "styles/Input";
import { IDropdownOption } from "constants/options";

interface ICustomSelectProps {
  name: string;
  placeholder: string;
  items: Array<IDropdownOption>;
}

const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const { name, placeholder, items } = props;

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
              <CustomInput
                {...getInputProps({
                  isOpen,
                  name,
                  placeholder,
                })}
                style={{ cursor: "pointer" }}
                readOnly={true}
                onClick={() => toggleMenu()}
              />
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
                    <span>
                    {item.name}
                    </span>
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
