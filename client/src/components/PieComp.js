import { useState, useEffect } from "react";
import PieChart from "./PieChart";
import { useQuery } from "@apollo/client";
import { GET_RESPONSES } from "../queries/responseQueries";

function PieComp() {
  const [yesNoTally, setYesNoTally] = useState({
    yes: 0,
    no: 0,
  });
  const { data } = useQuery(GET_RESPONSES);

  useEffect(() => {
    if (data) {
      const yesNoArray = data.responses.map((response) => response.yesno);

      let newYesNoMap = {
        yes: 0,
        no: 0,
      };

      for (let i = 0; i < yesNoArray.length; i++) {
        if (yesNoArray[i] === "yes") {
          newYesNoMap.yes++;
        } else if (yesNoArray[i] === "no") {
          newYesNoMap.no++;
        }
      }

      setYesNoTally(newYesNoMap);

      const yesNoDetails = {
        labels: ["I'm in!", "Screw you nerds!"],
        datasets: [
          {
            label: "Yes/No Responses",
            data: Object.values(newYesNoMap),
            backgroundColor: ["aqua", "pink"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };

      setYesNoData(yesNoDetails);
    }
  }, [data]);

  const [yesNoData, setYesNoData] = useState(null);

  console.log("yesNoData", yesNoData);

  if (!yesNoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div style={{ width: "16vw" }}>
        <PieChart chartData={yesNoData} />
      </div>
    </div>
  );
}

export default PieComp;
