import React from "react";
import { Attribute } from "../../../../types/Attributes";

const AttributeSingleSelect: React.FC<{
  label: string;
  attributes: Attribute [];
  currentAttributeValue: number;
  setCurrentAttributeValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ label, attributes, currentAttributeValue, setCurrentAttributeValue }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(e) => setCurrentAttributeValue(parseInt(e.target.value))}
        value={currentAttributeValue}
      >
        {attributes.map((attribute) => (
          <option value={attribute?.id}>{attribute?.name}</option>
        ))}
      </select>
    </div>
  );
};

export default AttributeSingleSelect;
