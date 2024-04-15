import { useEffect, useState } from "react";
import { carsClient } from "../Api/Clients/CarsClient";
import { Categories } from "../types/car.types";

export function useGetCategories() {
  const [categories, setCatories] = useState<Categories[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    carsClient
      .fetchAllCategories()
      .then((res: Categories[]) => {
        const transformedCategories = res.map(({ id, name, children }) => ({
          id,
          name,
          children:
            children?.map(({ id: childId, name: childName }) => ({
              id: childId,
              name: childName,
            })) || null,
        }));
        setCatories(transformedCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading categories", error);
        setLoading(false);
      });
  }, []);

  return { data: categories, loading };
}
