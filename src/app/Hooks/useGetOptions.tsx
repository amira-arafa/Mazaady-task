import { useState } from "react";
import { carsClient } from "../Api/Clients/CarsClient";
import { propertiesOption } from "../types/car.types";

export function useGetOptions() {
  const [options, setOptions] = useState<propertiesOption[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [propertyId, setPropertyId] = useState<number>();

  function getOptions(optionId: number, propertyId: number) {
    setLoading(true);
    carsClient
      .fetchAllOptions(optionId)
      .then((res: propertiesOption[]) => {
        const transformedOptions = res.map(({ id, name, options, parent }) => ({
          id,
          name,
          options,
          parent,
        }));

        setOptions(transformedOptions);
        setLoading(false);
        setPropertyId(propertyId);
      })
      .catch((error) => {
        console.log("Error loading options", error);
        setLoading(false);
      });
  }

  return { getAllOptions: getOptions, propertyId, data: options, loading };
}
