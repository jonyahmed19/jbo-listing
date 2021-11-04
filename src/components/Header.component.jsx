import React from "react";
import close from "./images/icon-remove.svg";

const Header = ({ keywords, removeKeywords, clearKeywords }) => {
  return (
    <div className="header-group">
      <ul>
        {keywords.map((keyword, id) => (
          <li key={id}>
            {keyword}
            <button onClick={() => removeKeywords(keyword)}>
              <img src={close} alt={keyword} />
            </button>
          </li>
        ))}
      </ul>
      <button className="clearBtn" onClick={() => clearKeywords()}>
        Clear
      </button>
    </div>
  );
};

export default Header;
