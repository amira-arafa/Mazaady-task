import { useState } from "react";
import { carsClient } from "../Api/Clients/CarsClient";
import { Properties } from "../types/car.types";

export function useGetProperties() {
  const [properties, setProperties] = useState<Properties[]>();
  const [loading, setLoading] = useState<boolean>(true);

  function getProperties(catId: number) {
    setLoading(true);
    carsClient
      .fetchAllProperties(catId)
      .then((res: Properties[]) => {
        const transformedProperties = res.map(({ id, name, options }) => ({
          id,
          name,
          options,
        }));
        setProperties(transformedProperties);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading properties", error);
        setLoading(false);
      });
  }

  return { getAllProperties: getProperties, data: properties, loading };
}
