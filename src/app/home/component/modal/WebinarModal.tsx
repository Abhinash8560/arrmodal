// WebinarModal.tsx
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Image from "next/image"; // Make sure to import the Image component
import Calendar from "../../../utils/svgs/components/webinar/calendar";
import { GiPlayButton } from "react-icons/gi";
import { MdArrowDropUp } from "react-icons/md";
import Rectangle from "@/app/utils/svgs/buttonIcons/rectangleicons/Rectangle";
import SearchIcon from "@/app/utils/svgs/components/searchIcons/SearchIcon";
import SelectTickIcon from "@/app/utils/svgs/components/selectDropdownIcons/SelectTickIcon";
import AllandStateButton from "@/app/components/filters/AllandStateButton/AllandStateButton";
import "./WebinarModal.css";
import ButtonComponentRight from "../../../components/ButtonComponentRight/ButtonComponentRight";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WebinarCard {
  title: string;
  date: string;
  description: string;
  zoomIconSrc: string;
  countdown: Countdown;
  imageSrc: string;
}

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: WebinarCard[]; 
}



const WebinarModal: React.FC<WebinarModalProps> = ({ isOpen, onClose, cardData }) => {
  let strArray = [
    "Central",
    "karnataka",
    "AP & Telangana",
    "Goa",
    "Manipur",
    "Sikkim",
  ];

  
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [webinar, setWebinar] = useState("upcoming");
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [dropdown, setDropdown] = useState(false);

  function handleAll() {
    setDropdown(!dropdown);
  }

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (value.length === 0) {
      setSelectedList([]);
    }

    setSearchText(value);
    const filterResult = strArray.filter((item) =>
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearchResult(filterResult);
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
    setSearchResult([]);
    setSearchText("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownContainer = document.querySelector(
        ".select-dropdown-container"
      );
      if (
        dropdownContainer &&
        event.target instanceof HTMLElement &&
        !dropdownContainer.contains(event.target) &&
        !event.target.closest(".select-dropdown-container") &&
        !event.target.closest(".primary-search-container")
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setDropdown]);

  return (
    <Modal show={isOpen} onHide={onClose} lg={3} md={2} xs={1}>
      <div className="modal--mainwebinar">
      
        <Modal.Body className="modal--webinar">
 
          <div className="webinar--modal-container ">
            <div className="__webinarmodalcard--container ">
              <div className="__webinarswitch">
                <div className="__webinartextflex">
                  <div className="__webinartextdrop">
                    <div>
                      <Rectangle />
                    </div>
                    <div className="__webinartextdropinner">
                      <h2 className="webinar-sm-primary">Webinars</h2>
                      <p className="webinar-md-tertiary">
                        From aspirants to achievers: MM webinars and unlock your full
                        potential{" "}
                      </p>
                    </div>
                  </div>
                  <div className="__webinardropdownright">
                    <AllandStateButton onClick={handleAll}>All</AllandStateButton>
                    {dropdown && (
                      <div className="drop-down">
                        <div className="select-dropdown-container">
                          <div className="primary-search-container">
                            <div className="primary-search-icon">
                              <SearchIcon />
                            </div>
                            <input
                              onChange={handleChange}
                              value={
                                !searchText
                                  ? selectedList.length === 0
                                    ? ""
                                    : selectedList.length <= 2
                                    ? `${selectedList.join(",")} `
                                    : `${selectedList[0]}, ${selectedList[1]}, +${
                                        selectedList.length - 2
                                      }more `
                                  : searchText
                              }
                              placeholder="Search by keyword"
                              className="primary-search-tag"
                              type="text"
                            />
                          </div>
                          <div className="dropdown-container">
                            {searchResult.length !== 0 ? (
                              searchResult.map((items, index) => {
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
                                      {selectedList.filter((ele) => ele === items)
                                        .length > 0 ? (
                                        <SelectTickIcon />
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <>
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
                                        {selectedList.filter((ele) => ele === items)
                                          .length > 0 ? (
                                          <SelectTickIcon />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="__webinardevflexmodal">
                  <div className="__webinarbtn--box">
                    <button
                      onClick={() => setWebinar("upcoming")}
                      className={`__webinarbtn--1 ${
                        webinar === "upcoming" ? "btn-color" : ""
                      }`}
                    >
                      Upcoming (9)
                    </button>
                    <button
                      onClick={() => setWebinar("Recording")}
                      className={`__webinarbtn--2 ${
                        webinar === "Recording" ? "btn-color" : ""
                      }`}
                    >
                      Recorded (80)
                    </button>
                  </div>

                  <div className="__webinarmodalflex--card">
                  {webinar === "upcoming" && Array.isArray(cardData) && cardData.length > 0 && (
                      <div className="card--grid">
                        {cardData.map((card, index) => (
                          
                          <div className="__cardupcoming" key={index}>
                            <div className="__imagemainmodal">
                              <Image
                                src={card.imageSrc}
                                width={300}
                                height={200}
                                alt="img"
                              />
                            </div>
                            <div className="__counselling--main">
                              <div className="__counselling--mainup">
                                <div className="__counselling--inner">
                                  <h2>{card.title}</h2>
                                  <div className="__timeflex">
                                    <div className="__svgcontainerwebinar">
                                      <Calendar />
                                    </div>
                                    <span>{card.date}</span>
                                  </div>
                                </div>
                                <div className="__counselling--innerpre">
                                  <h2>{card.description}</h2>
                                </div>
                              </div>
                              <div className="__counselling--maindown">
                                <div className="__leftzoom">
                                  <Image
                                    src={card.zoomIconSrc}
                                    width={25}
                                    height={25}
                                    alt="img"
                                  />
                                </div>
                                <div className="__righttime">
                                  <div className="__days">
                                    <h2>{card.countdown.days}</h2>
                                    <p>days</p>
                                  </div>
                                  <div className="__days">
                                    <h2>{card.countdown.hours}</h2>
                                    <p>hrs</p>
                                  </div>
                                  <div className="__days">
                                    <h2>{card.countdown.minutes}</h2>
                                    <p>min</p>
                                  </div>
                                  <div className="__days">
                                    <h2>{card.countdown.seconds}</h2>
                                    <p>sec</p>
                                  </div>
                                </div>
                                <div className="__buttonzoom">
                                  <button>
                                    Book Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                            <section className="endflex">
          <button className="btn btn-primary border border-0" onClick={onClose}>
              X
            </button>
          </section>
                      </div>
                    )}

                  {webinar === "Recording" && Array.isArray(cardData) && cardData.length > 0 && (
                      <div className="card--gridmodal--recorded">
                        {cardData.map((cardrec, index) => (
                          <div className="__cardrecordedmodal" key={index}>
                            <div className="__imagemainmodal">
                              <Image
                                src={cardrec.imageSrc}
                                width={300}
                                height={200}
                                alt="img"
                              />
                              <div className={`__buttonzoomrecorded ${index}`}>
                                <button>
                                  <span>
                                    <GiPlayButton />
                                    
                                  </span>
                                  Watch
                                </button>
                              </div>
                            </div>

                            <div className="__counselling--main">
                              <div className="__counselling--mainup">
                                <div className="__counselling--inner">
                                  <h2>{cardrec.title}</h2>
                                  <div className="__timeflex">
                                    <span>1hr 30mins/ 20th Sept, 2023</span>
                                  </div>
                                </div>
                                <div className="__counselling--innerpre">
                                  <h2>{cardrec.description}</h2>
                                </div>
                              </div>
                              <div className="__counselling--maindown">
                                <div className="__icon--attended">
                                  <span>
                                    <MdArrowDropUp />
                                  </span>
                                  <h2>1.9k Attended</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                                  <section className="endflex">
          <button className="btn btn-primary border border-0" onClick={onClose}>
              X
            </button>
          </section>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>

      
                    </div>

        </Modal.Body>
      </div>
    </Modal>
  );
};

export default WebinarModal;
