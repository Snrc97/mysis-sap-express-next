import { useEffect, useState } from "react";
import { InputType } from "./datatable";
import { setDefaultOptions } from 'date-fns';
import { apiService } from '@/scripts/api-service';



export interface ReusableFormProps {
  name: string;
  label: string;
  type?: "input" | "select";
  elementType?: InputType;
  defaultValue?: string | number | readonly string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  format?: string;
  onChange?: (value: string | number | readonly string[]) => void;
  endpoint?: string;

  // case type : select
  options?: { value: string | number; label: string }[];

}

export const ReusableFormElement: React.FC<ReusableFormProps> = ({
  name,
  label,
  type,
  elementType = "text",
  options = [],
  endpoint,
  defaultValue,
  required = true,
  disabled = false,
  placeholder,
  onChange
}) => {

  type = elementType == "select" ? "select" : type ?? "input"

  const [value, setValue] = useState(defaultValue);
  const [_options, setOptions] = useState(options);


  const handleOnChange = (prmValue: string | number | readonly string[]) => {
    if (onChange) {
      defaultValue = prmValue;
      setValue(prmValue);
      onChange(prmValue);
    }
  };

  if (elementType == "datetime-local") {
    console.log(value);
  }

  switch (type) {
    case "input":

      switch (elementType) {

        case "radio":
          // radio
          return (
            <div className="flex gap-2 flex-wrap items-center justify-start w-full md:w-auto">
              {options?.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name={name}
                    defaultChecked={defaultValue === option.value}
                    checked={value === option.value}
                    onChange={(x) => { handleOnChange(x.target.value); }}
                    required={required}
                    disabled={disabled}
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          );

        case "checkbox":
          // checkbox
          return (
            <div className="flex gap-2 flex-wrap items-center justify-start w-full md:w-auto">
              {options?.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    name={name}
                    defaultChecked={Array.isArray(defaultValue) && defaultValue?.includes(option.value)}
                    checked={value === option.value}
                    onChange={(x) => { handleOnChange(x.target.value); }}
                    required={required}
                    disabled={disabled}
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          );

        case "datetime-local":
          return (
            <input
              type={elementType}
              name={name}
              value={elementType === "datetime-local" && typeof value === "string" ? value.slice(0, 19) : value}
              onChange={(x) => { handleOnChange(x.target.value); }}
              required={required}
              disabled={disabled}
              placeholder={placeholder}
              className="form-input bg-gray-300 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          );
      }

    break;


    case "select":

      const fetchOptions = async () => {
        if (!endpoint) {
          return;
        }
        const data = await apiService.get(endpoint + '?pluck=1').then(x => x.data);
        setOptions(data);
      }

      useEffect(() => {
        fetchOptions();
      }, []);


      return (
        <select name={name}
          title={label}
          value={value}
          onChange={(x) => { handleOnChange(x.target.value); }}
          required={required}
          disabled={disabled}
          className="form-select bg-gray-300 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          {_options?.map((option) => (
            <option key={option.value} value={option.value} >
              {option?.label ?? option.value}
            </option>
          ))}
        </select>
        //   <SelectSearch
        //   options={[]}
        //   onBlur={() => { }}
        //   onChange={() => { }}
        //   onFocus={() => { }}
        //   placeholder="Seçiniz"
        //   />
      );

    default:
      return null;
  }
};
