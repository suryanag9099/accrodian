import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div className={`item ${activeIndex === index ? "open" : ""}`} key={index}>
          <div className="number">{index + 1}</div>
          <div className="title">{faq.title}</div>
          <button
            className="icon"
            onClick={() => handleToggle(index)}
          >
            {activeIndex === index ? "-" : "+"}
          </button>
          {activeIndex === index && (
            <div className="content-box">
              {faq.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
