import { useState, useRef } from "react";

import "./timeline-item.styles.scss";

const TimelineItem = ({ milestone }) => {
  const itemHeight = useRef(null);
  const { title, subtitle, fromto, paragraphs } = milestone;
	const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleClick = () => {
    setIsDescriptionOpen((state) => !state);
  };

  return (
    <div
      ref={itemHeight}
      className={`timeline-item ${isDescriptionOpen ? "item-open" : ""}`}
      from-to={fromto}
      onClick={handleClick}
    >
      <div className="item-title">
        <div>
          <h4>
            {title}
            <span>{subtitle}</span>
          </h4>
        </div>
        <span>&rsaquo;</span>
      </div>
      <div className="item-description">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
