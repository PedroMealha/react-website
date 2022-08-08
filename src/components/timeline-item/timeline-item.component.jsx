import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./timeline-item.styles.scss";

const TimelineItem = ({ milestone }) => {
  const itemHeight = useRef(null);
  const { title, subtitle, fromto, paragraphs, certification } = milestone;
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleCertification = () => {
    window.open(certification);
  };

  const handleClick = () => {
    setIsDescriptionOpen((state) => !state);
  };

  return (
    <div
      ref={itemHeight}
      className={`timeline-item ${isDescriptionOpen ? "item-open" : ""}`}
      from-to={fromto}
      onClick={paragraphs.length > 0 ? handleClick : undefined}
    >
      <div className="item-title">
        <div>
          <h4>
            {title}
            <span>{subtitle}</span>
          </h4>
        </div>
        {paragraphs.length > 0 && <span>&rsaquo;</span>}
        {certification && <i onClick={handleCertification}>open_in_new</i>}
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
