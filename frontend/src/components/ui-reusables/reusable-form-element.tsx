import { useState } from "react";
import { InputType } from "./datatable";


export interface ReusableFormProps {
  name: string;
  label: string;
  type?: "input" | "select" | "radio" | "checkbox";
  inputType?: InputType;
  options?: { value: string | number; label: string }[];
  defaultValue?: string | number | readonly string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string | number | readonly string[]) => void;
}

export const ReusableFormElement: React.FC<ReusableFormProps> = ({
  name,
  label,
  type,
  inputType,
  options,
  defaultValue,
  required,
  disabled,
  placeholder,
  onChange
}) => {

  const[value,setValue] = useState(defaultValue);


  const handleOnChange = (prmValue: string | number | readonly string[]) => {
    if (onChange) {
      defaultValue = prmValue; 
      setValue(prmValue);
      onChange(prmValue);  
    }
  };

  if(inputType == "datetime-local")
  {
    console.log(value);
  }

  switch (type) {
    case "input":
      return (
        <input
          type={inputType}
          name={name}
          value={inputType === "datetime-local" && typeof value === "string" ? value.slice(0, 19) : value}
          onChange={(x) => { handleOnChange(x.target.value); }} 
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className="form-input bg-gray-300 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      );
    case "select":
      return (
        <select name={name} 
        title={label} 
        value={value}
        onChange={(x) => { handleOnChange(x.target.value); }} 
        required={required} 
        disabled={disabled}
        className="form-select bg-gray-300 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
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
    case "radio":
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
    default:
      return null;
  }
};
