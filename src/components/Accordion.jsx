"use client";
import React, { useState, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, id, title, lectures } = props;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <BsChevronDown className="rc-accordion-icon" />
          <h5 className="rc-accordion-title ">
            {title} (Lectures-{lectures.length})
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
            {lectures.map((item, index) => (
              <li className="flex items-center gap-3">
                <MdOndemandVideo fontSize={"17px"} />
                <p className="text-[17px]">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ course }) => {
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
                {course.sections.map((item, index) => (
                  <AccordionItem
                    key={index}
                    active={active}
                    handleToggle={handleToggle}
                    id={index}
                    title={item.title}
                    lectures={item.lectures}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
