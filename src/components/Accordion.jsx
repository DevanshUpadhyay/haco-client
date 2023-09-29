"use client";
import React, { useState, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
const lectures = [
  {
    id: 1,
    header: "INTRODUCTION",
    listItems: [
      "Introduction to Java",
      "Platform Independent",
      "Eclipse Setup",
    ],
  },
  {
    id: 2,
    header: "FUNDAMENTALS",
    listItems: [
      "Java Fundamentals",
      "Explanation (Part 1)",
      "Explanation (Part 2)",
      "Explanation (Part 3)",
      "Explanation (Part 4)",
    ],
  },
  {
    id: 3,
    header: "Classes",
    listItems: [
      "Flow of controls",
      "Explanation (Part 1)",
      "Explanation (Part 2)",
      "Explanation (Part 3)",
      "Explanation (Part 4)",
    ],
  },
  {
    id: 4,
    header: "METHODS/FUNCTIONS",
    listItems: ["What are methods", "Methods Examples"],
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, lecture } = props;
  const { header, id, listItems } = lecture;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <BsChevronDown className="rc-accordion-icon" />
          <h5 className="rc-accordion-title ">
            {header} (Lectures-{listItems.length})
          </h5>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <ul>
            {listItems.map((item, index) => (
              <li className="flex items-center gap-3">
                <MdOndemandVideo fontSize={"17px"} />
                <p className="text-[17px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="accordion_card">
              <div className="card-body">
                {lectures.map((lecture, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      active={active}
                      handleToggle={handleToggle}
                      lecture={lecture}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
