"use client";
import React, { useState, useEffect } from "react";
import "./webinar.css";
import Link from "next/link";
import AllandStateButton from "../../../components/filters/AllandStateButton/AllandStateButton";
import Rectangle from "../../../utils/svgs/buttonIcons/rectangleicons/Rectangle";
import SelectFieldComponent from "../../../components/SelectComponent/SelectFieldComponent";
import SearchIcon from "../../../utils/svgs/components/searchIcons/SearchIcon";
import SelectDropdownIcon from "../../../utils/svgs/components/selectDropdownIcons/SelectDropdownIcon";
import SelectTickIcon from "../../../utils/svgs/components/selectDropdownIcons/SelectTickIcon";
import Image from "next/image";
import Calendar from "../../../utils/svgs/components/webinar/calendar";
import ButtonComponentRight from "../../../components/ButtonComponentRight/ButtonComponentRight";
import { GiPlayButton } from "react-icons/gi";
import { MdArrowDropUp } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import WebinarModal from "../modal/WebinarModal";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CardData {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  zoomIconSrc: string;
  countdown: Countdown;
}

const cardData: CardData[] = [
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
  {
    imageSrc: "/image/img1.png",
    title: "Tamil Nadu Counselling",
    date: "5:30 PM / 20th Sept, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque",
    zoomIconSrc: "/image/zoom.png",
    countdown: {
      days: 10,
      hours: 12,
      minutes: 50,
      seconds: 50,
    },
  },
];

const Webinar = () => {
  const [webinar, setWebinar] = useState("upcoming");
  // const [data, SetData] = useState<webinarData[]>(webinarData );
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState<CardData[] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (cardData: CardData[]) => {
    console.log("handleCardClick called with:", cardData);
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log("isModalOpen:", isModalOpen);
  console.log("selectedCardData:", selectedCardData);

  function handleAll() {
    setDropdown(!dropdown);
  }
  let strArray = [
    "Central",
    "karnataka",
    "AP & Telangana",
    "Goa",
    "Manipur",
    "Sikkim",
  ];
  let handleChange = (e: string | any): void => {
    const { value } = e.target;
    if (value.length === 0) {
      setSelectedList([]);
    }
    setSearchText(e.target.value);
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
  const handlewatchquery = (e: any) => {
    console.log(e, "click");
  };
  return (
    <div className="webinar--container ">
      <div className="__webinarcard--container ">
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
                  {/*  Select Field */}
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
                    {
                      <div className="dropdown-container">
                        {searchResult.length !== 0
                          ? searchResult.map((items, index) => {
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
                                    {selectedList.filter((ele) => ele == items)
                                      .length > 0 ? (
                                      <SelectTickIcon />
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                              );
                            })
                          : strArray.map((items, index) => {
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
                                    {selectedList.filter((ele) => ele == items)
                                      .length > 0 ? (
                                      <SelectTickIcon />
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                      </div>
                    }
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="__webinardevflex">
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

            <div className="__webinarflex--card">
              {webinar === "upcoming" && (
                <div className="card--grid">
                  {cardData.slice(0, 3).map((card, index) => (
                    <div className="__cardupcoming" key={index}>
                      <div className="__imagemain">
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
                          <div className="__righttime">
                            <div className="__leftzoom">
                              <Image
                                src={card.zoomIconSrc}
                                width={25}
                                height={25}
                                alt="img"
                              />
                            </div>
                            {index % 3 === 2 ? (
                              <>
                                <div className="__days--live">
                                  <label>Live</label>
                                <div className="blink-dot"></div>
                                </div>

                              </>
                            ) : (
                              <>
                                <div className="__days">
                                  <h2>{card.countdown.days}</h2>
                                  <p>days</p>
                                </div>
                                <div className="__days">
                                  <h2>{card.countdown.hours}</h2>
                                  <p>{index % 3 === 2 ? "" : "hrs"}</p>
                                </div>
                                <div className="__days">
                                  <h2>{card.countdown.minutes}</h2>
                                  <p>{index % 3 === 2 ? "" : "min"}</p>
                                </div>
                                <div className="__days">
                                  <h2>{card.countdown.seconds}</h2>
                                  <p>{index % 3 === 2 ? "" : "sec"}</p>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="__buttonzoom">
                            <button>
                              {index % 3 === 2 ? "Join Now" : "Book Now"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {webinar === "upcoming" && (
                    <>
                      <div
                        onClick={() => handleCardClick(cardData)}
                        className="__viewmore"
                      >
                        <div className="__iconview">
                          <IoArrowForwardSharp />
                        </div>
                        <h2>View More</h2>
                      </div>
                    </>
                  )}
                </div>
              )}

              {webinar === "Recording" && (
                <div className="card--grid--recorded">
                  {cardData.slice(0, 3).map((cardrec, index) => (
                    <div className="__cardrecorded" key={index}>
                      <div className="__imagemain">
                        <Image
                          src={cardrec.imageSrc}
                          width={300}
                          height={200}
                          alt="img"
                        />
                        <div className={`__buttonzoomrecorded ${index}`}>
                          <ButtonComponentRight
                            onClick={() => handlewatchquery(1)}
                            icon=<GiPlayButton />
                            disableIcon={null}
                            className={"right-button-primary-default"}
                          >
                            Watch
                          </ButtonComponentRight>
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
                  {/* {webinar === "upcoming" && (
                <>
                
                  <div onClick={() => handleCardClick(cardData)} className="__viewmore">
                  <div className="__iconview">
                  <IoArrowForwardSharp />
                  </div>
                    <h2>View More</h2>
                  </div>
                </>
              )} */}

                  {webinar === "Recording" && (
                    <div
                      onClick={() => handleCardClick(cardData)}
                      className="__viewmore"
                    >
                      <div className="__iconview">
                        <IoArrowForwardSharp />
                      </div>
                      <h2>View More</h2>
                    </div>
                  )}
                </div>
              )}
            </div>

            {selectedCardData && (
              <WebinarModal
                isOpen={isModalOpen}
                onClose={closeModal}
                cardData={selectedCardData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
