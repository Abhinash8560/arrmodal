import SelectDropdownIcon from "@/app/utils/svgs/components/selectDropdownIcons/SelectDropdownIcon";
import SelectTickIcon from "@/app/utils/svgs/components/selectDropdownIcons/SelectTickIcon";
import React, { useState } from "react";

const SelectFieldComponent = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  let strArray = ["List1", "List2", "List3", "List4"];

  let handleDropdownClick = () => {
    setOpenDropDown(!openDropDown);
  };

  let handleSelectClick = (items: string): void => {
    let checkDuplicates = false;
    for (let i = 0; i < selectedList.length; i++) {
      if (items === selectedList[i]) {
        checkDuplicates = true;
        break;
      } 
    }

    if (!checkDuplicates) {
      setSelectedList([...selectedList, items]);
    } else {
      setSelectedList((prev) => prev.filter((ele) => ele !== items));
    }
  };

  console.log(selectedList);

  return (
    <div>
      {/*  Select Field */}
      <div className="select-dropdown-container">
        <div onClick={handleDropdownClick} className="select-container">
          <p className="select-tag">
            {selectedList.length === 0
              ? "Select the list"
              : selectedList.length <= 2
              ? `${selectedList.join(", ")} `
              : `${selectedList[0]}, ${selectedList[1]}, +${selectedList.length - 2}more `}
          </p>
          <div className="select-icon">
            <SelectDropdownIcon />
          </div>
        </div>
        {openDropDown && (
          <div className="dropdown-container">
            {strArray.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelectClick(items);
                  }}
                  key={index}
                  className="list-container"
                >
                  <p className="list-item">{items}</p>
                  <div className="list-icon">
                    {selectedList.filter((ele) => ele == items).length > 0 ? (
                      <SelectTickIcon />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectFieldComponent;
