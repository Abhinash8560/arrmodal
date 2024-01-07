import SelectDropdownIcon from "@/app/utils/svgs/components/selectDropdownIcons/SelectDropdownIcon";
import SelectTickIcon from "@/app/utils/svgs/components/selectDropdownIcons/SelectTickIcon";
import React, { useState } from "react";
import AllandStateButton from "../filters/AllandStateButton/AllandStateButton";
import SearchIcon from "@/app/utils/svgs/components/searchIcons/SearchIcon";

const DropdownInputComponent = () => {
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
    <>
      {/*  Select Field */}
      <div className="dropdown-input-container">
        <AllandStateButton onClick={handleDropdownClick}>
          State
        </AllandStateButton>
        {openDropDown && (
          <div className="search-dropdown-container">
            <div className="search-section">
              <div className="primary-search-container">
                <div className="primary-search-icon">
                  <SearchIcon />
                </div>
                <input
                  placeholder="Search by keyword"
                  className="primary-search-tag"
                  type="text"
                />
              </div>
            </div>
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
    </>
  );
};

export default DropdownInputComponent;
