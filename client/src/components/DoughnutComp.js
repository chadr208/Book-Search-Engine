import { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import { useQuery } from "@apollo/client";
import { GET_RESPONSES } from "../queries/responseQueries";

function DoughnutComp() {
  const [dayMap, setDayMap] = useState({
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });
  const { data } = useQuery(GET_RESPONSES);

  useEffect(() => {
    if (data) {
      const dayArray = data.responses.map((response) => response.day);

      const newDayMap = {
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0,
      };

      for (let i = 0; i < dayArray.length; i++) {
        if (dayArray[i] === "Thursday") {
          newDayMap.Thursday = newDayMap.Thursday + 1;
        } else if (dayArray[i] === "Friday") {
          newDayMap.Friday = newDayMap.Friday + 1;
        } else if (dayArray[i] === "Saturday") {
          newDayMap.Saturday = newDayMap.Saturday + 1;
        } else if (dayArray[i] === "Sunday") {
          newDayMap.Sunday = newDayMap.Sunday + 1;
        }
      }

      setDayMap(newDayMap);

      // Update dayData state after the dayMap state is updated
      const dayData = {
        labels: Object.keys(newDayMap),
        datasets: [
          {
            label: "Day",
            data: Object.values(newDayMap),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "darkred",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };

      setDayData(dayData);
    }
  }, [data]);

  const [dayData, setDayData] = useState(null);

  if (!dayData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div style={{ width: "16vw" }}>
        <DoughnutChart chartData={dayData} />
      </div>
    </div>
  );
}

export default DoughnutComp;
