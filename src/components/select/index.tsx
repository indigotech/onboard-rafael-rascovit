import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any[];
  label: string;
}

const renderOptions = (options: any[]) => {
  return (
    options &&
    options.length > 0 &&
    options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      );
    })
  );
};

export const Select: React.FC<SelectProps> = ({ options, label, ...rest }) => {
  return (
    <div>
      <label>
        {label}
        <select {...rest}>{renderOptions(options)}</select>
      </label>
    </div>
  );
};
