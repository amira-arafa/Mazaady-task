import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import "./DropDown.css";

type DropDownProps = {
  options: option[];
  isSearchable: boolean;
  placeholder: string;
  label: string;
  isRequired: boolean;
  onChange?: ((selectedValue: any) => void) | undefined;
  id: string;
  value?: string;
};
type option = {
  name: string;
  value: string;
};

export default function DropDown({
  options,
  isSearchable,
  placeholder,
  label,
  isRequired,
  onChange,
  id,
  value,
}: DropDownProps) {
  return (
    <>
      <label>
        {label} {isRequired && <span className="text-red">*</span>}
      </label>
      <SelectSearch
        id={id}
        options={options}
        search={isSearchable}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
