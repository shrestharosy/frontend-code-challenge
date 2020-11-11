import React, { FC } from "react";

import Downshift from "downshift";
import { Menu, Item, SelectInputWrapper } from "./styles";
import { CustomInput } from "styles/Input";

interface ICustomSelectProps {
  name: string;
  placeholder: string;
  items: Array<{ name: string; id: string }>;
  itemToString: any;
}

const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const { name, placeholder, items, itemToString } = props;
  return (
    <div>
      <Downshift itemToString={itemToString}>
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
                    {itemToString(item)}
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
