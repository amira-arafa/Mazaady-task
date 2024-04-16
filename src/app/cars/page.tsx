"use client";
import { useEffect, useState } from "react";
import { useGetCategories } from "../Hooks/useGetCategories";
import DropDown from "../_sharedComponents/DropDown/DropDown";
import { Categories, Properties, propertiesOption } from "../types/car.types";
import { useGetProperties } from "../Hooks/useGetProperties";
import { useGetOptions } from "../Hooks/useGetOptions";

type Option = {
  name: string;
  value: string;
};
type Category = {
  id: number;
  name: string;
};
type PropertyOption = {
  id: string;
  name: string;
  propertyOption?: PropertyOption;
  otherValue?: string;
};
type SelectedProperties = {
  property: { id: number; name: string };
  propertyOption: PropertyOption;
};
export default function Cars() {
  const [categoriesOptions, setCatoriesOptions] = useState<Option[]>([]);
  const [mainCategory, setMainCategory] = useState<Category>();
  const [subCategory, setSubCategory] = useState<Category>();
  const [subCategoriesOptions, setSubCatoriesOptions] = useState<Option[]>([]);
  const [propertiesOptions, setPropertiesOptions] = useState<Properties[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<
    SelectedProperties[]
  >([]);

  const categories = useGetCategories();
  const properties = useGetProperties();
  const options = useGetOptions();

  useEffect(() => {
    if (categories.data) {
      setCatoriesOptions(mapDataToOptions(categories.data));
    }
  }, [categories.data]);
  useEffect(() => {
    if (properties.data && properties.data.length > 0) {
      setPropertiesOptions(properties.data);
    }
  }, [properties.data]);

  const handleMainCategoryChange = (id: number) => {
    const category = categories?.data?.find((cat) => id == cat.id);
    const subCategories = category?.children;
    subCategories && setSubCatoriesOptions(mapDataToOptions(subCategories));
    setMainCategory({ id, name: category?.name || "" });
  };

  const handleSubCategoriesChange = (id: number) => {
    const subCategory = subCategoriesOptions.find((item) => +item.value == id);
    properties.getAllProperties(id);
    setSubCategory({ id, name: subCategory?.name || "" });
  };

  const getPropertyOptions = (property: propertiesOption[]) => {
    return mapDataToOptions(property, true);
  };

  const mapDataToOptions = (
    data: Categories[] | propertiesOption[],
    hasOther?: boolean,
  ) => {
    return (data || [])
      .map(({ name, id }) => ({
        name,
        value: id.toString(),
      }))
      .concat(hasOther ? [{ name: "Other", value: "other" }] : []);
  };

  const handlePropertiesChange = (id: string, property: Properties) => {
    setSelectedProperties((prevState: SelectedProperties[]) => {
      const index = prevState.findIndex(
        (item) => item.property.id === property.id,
      );
      const option = property.options.find((item) => item.id === +id);
      id !== "other" && options.getAllOptions(+id, property.id);
      if (index !== -1) {
        const updatedState = [...prevState];
        updatedState[index] = {
          property: { id: property.id, name: property.name },
          propertyOption: { id, name: option?.name || "" },
        };
        return updatedState;
      } else {
        return [
          ...prevState,
          {
            property: { id: property.id, name: property.name },
            propertyOption: { id, name: option?.name || "" },
          },
        ];
      }
    });
  };

  const getPropertyOption = (property: Properties) => {
    return selectedProperties.find((item) => item.property.id === property.id);
  };
  const handleOthersChange = (
    e: React.FormEvent<HTMLInputElement>,
    property: Properties,
  ) => {
    const otherValue = e.currentTarget.value;
    const optionId = getPropertyOption(property)?.propertyOption.id.toString();
    const optionName = getPropertyOption(property)?.propertyOption.name;
    setSelectedProperties((prevState: SelectedProperties[]) => {
      const index = prevState.findIndex(
        (item) => item.property.id === property.id,
      );
      const updatedState = [...prevState];
      updatedState[index] = {
        property: { id: property.id, name: property.name },
        propertyOption: {
          id: optionId || "",
          otherValue,
          name: optionName || "",
        },
      };
      return updatedState;
    });
  };

  const checkTableAvailability = () => {
    const isAvailable =
      mainCategory &&
      Object.keys(mainCategory).length > 0 &&
      subCategory &&
      Object.keys(subCategory).length > 0;
    return isAvailable;
  };

  return (
    <div className="bg-mainGray min-h-screen">
      <div className="xl:w-3/5 	xl:mx-auto mx-16 py-30 font-nunito">
        <form className="shadow-md rounded-8 xl:p-30 p-16 bg-white">
          {!categories.loading && (
            <DropDown
              id="main_category"
              options={categoriesOptions}
              isSearchable={true}
              placeholder="Choose your main category"
              label="Main Category"
              isRequired={true}
              onChange={(e) => handleMainCategoryChange(e)}
            />
          )}
          {subCategoriesOptions.length > 0 && (
            <DropDown
              id="sub_category"
              options={subCategoriesOptions}
              isSearchable={true}
              placeholder="Choose your sub category"
              label="Sub Category"
              isRequired={true}
              onChange={(e) => handleSubCategoriesChange(e)}
            />
          )}
          {propertiesOptions &&
            propertiesOptions?.length > 0 &&
            propertiesOptions.map((property, i) => (
              <div key={i}>
                <DropDown
                  id={`property-${property.id}`}
                  options={getPropertyOptions(property.options)}
                  isSearchable={true}
                  placeholder={`Choose ${property.name}`}
                  label={property.name}
                  isRequired={false}
                  value={getPropertyOption(
                    property,
                  )?.propertyOption.id.toString()}
                  onChange={(e) => handlePropertiesChange(e, property)}
                />
                {getPropertyOption(property)?.propertyOption.id.toString() ===
                  "other" && (
                  <input
                    placeholder={`Enter ${property.name}`}
                    onChange={(e) => handleOthersChange(e, property)}
                    className="px-md border-2 border-solid border-standardGray leading-10 py-2 w-full focus-visible:outline-0 mb-8"
                  ></input>
                )}
              </div>
            ))}

          <div className="overflow-x-auto">
            {checkTableAvailability() && (
              <table className="table-auto w-full mt-16">
                <thead>
                  <tr>
                    <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                      Main Category
                    </th>
                    <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center text-center">
                      {mainCategory?.id}
                    </td>
                    <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center text-center">
                      {mainCategory?.name}
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                      Subcategory
                    </th>
                    <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center">
                      {subCategory?.id}
                    </td>
                    <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center">
                      {subCategory?.name}
                    </td>
                  </tr>
                </tbody>
                {selectedProperties.length > 0 && (
                  <thead>
                    <tr>
                      <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                        Property
                      </th>
                      <th className="border border-solid border-standardGray px-4 py-2 font-nunito bg-mainGray">
                        Value
                      </th>
                    </tr>
                  </thead>
                )}
                {selectedProperties.length > 0 && (
                  <tbody>
                    {selectedProperties.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center">
                          {item.property.name}
                        </td>
                        <td className="border border-solid border-standardGray px-4 py-2 font-nunito text-center">
                          {item.propertyOption.otherValue
                            ? item.propertyOption.otherValue
                            : item.propertyOption.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
