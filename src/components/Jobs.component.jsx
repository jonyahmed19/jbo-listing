import React, { useEffect, useState } from "react";
import Job from "./Job.component";

const Jobs = ({ data, setKeywords, words }) => {
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (words) {
      const newData = data.filter((d) => {
        return words.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [words]);

  return (
    <div className="jobs">
      {filteredData.map((job) => (
        <Job key={job.id} job={job} setKeywords={setKeywords} />
      ))}
    </div>
  );
};

export default Jobs;
