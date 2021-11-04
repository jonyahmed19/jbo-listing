import React, { useEffect, useState } from "react";

const Job = ({ job, setKeywords }) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = job;

  const keyWords = [role, level, ...languages, ...tools];
  const [icon, setIcon] = useState("");
  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => setIcon(d.default));
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div className="job">
      <div className="logo">
        <img src={icon} alt={position} />
      </div>
      <div className="part1">
        <div className="company">
          <div className="cname">{company}</div>
          {job.new && <div className="new">new!</div>}
          {featured && <div className="featured">featured!</div>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <span>{postedAt}</span>&bull;
          <span>{contract}</span>&bull;
          <span>{location}</span>
        </div>
      </div>
      <div className="part2">
        {keyWords.map((keyword, nestedId) => (
          <button
            className="button"
            onClick={() => setKeywords(keyword)}
            key={nestedId}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
