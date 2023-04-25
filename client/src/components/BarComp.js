import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { useQuery } from "@apollo/client";
import { GET_RESPONSES } from "../queries/responseQueries";

function BarComp() {
  const [locationMap, setLocationMap] = useState({
    Manhattan: 0,
    Brooklyn: 0,
    Queens: 0,
    Bronx: 0,
    StatenIsland: 0,
  });
  const { data } = useQuery(GET_RESPONSES);

  useEffect(() => {
    if (data) {
      const locationArray = data.responses.map((response) => response.location);

      const newLocationMap = {
        Manhattan: 0,
        Brooklyn: 0,
        Queens: 0,
        Bronx: 0,
        StatenIsland: 0,
      };

      for (let i = 0; i < locationArray.length; i++) {
        if (locationArray[i] === "Manhattan") {
          newLocationMap.Manhattan = newLocationMap.Manhattan + 1;
        } else if (locationArray[i] === "Brooklyn") {
          newLocationMap.Brooklyn = newLocationMap.Brooklyn + 1;
        } else if (locationArray[i] === "Queens") {
          newLocationMap.Queens = newLocationMap.Queens + 1;
        } else if (locationArray[i] === "Bronx") {
          newLocationMap.Bronx = newLocationMap.Bronx + 1;
        } else if (locationArray[i] === "Staten Island") {
          newLocationMap.StatenIsland = newLocationMap.StatenIsland + 1;
        }
      }

      setLocationMap(newLocationMap);

      // Update locationData state after the locationMap state is updated
      const locationData = {
        labels: Object.keys(newLocationMap),
        datasets: [
          {
            label: "Location",
            data: Object.values(newLocationMap),
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

      setLocationData(locationData);
    }
  }, [data]);

  const [locationData, setLocationData] = useState(null);

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div style={{ width: "35vw" }}>
        <BarChart chartData={locationData} />
      </div>
    </div>
  );
}

export default BarComp;
