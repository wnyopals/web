import React from "react";
import { Attribute } from "../../../../types/Attributes";

const AttributeMultiSelect: React.FC<{
  label: string;
  attributes: Attribute [];
  selectedAttributeValue: number;
  setSelectedAttributeValue: React.Dispatch<React.SetStateAction<number>>;
  currentAttributeValues: number[];
  setCurrentAttributeValues: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({
  label,
  attributes,
  selectedAttributeValue,
  setSelectedAttributeValue,
  currentAttributeValues,
  setCurrentAttributeValues,
}) => {
  function onAddAttributeClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (currentAttributeValues.includes(selectedAttributeValue)) {
      alert("Cannot add duplicate attributes. Please select another attribute");
    } else {
      setCurrentAttributeValues((current) => [
        ...current,
        selectedAttributeValue,
      ]);
    }
  }

  function onRemoveAttributeClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    const filteredItems = currentAttributeValues.filter(
      (attributeId) => attributeId !== id
    );
    setCurrentAttributeValues([...filteredItems]);
  }
  return (
    <div>
      <label>{label}</label>
      <select
        value={selectedAttributeValue}
        onChange={(e) => setSelectedAttributeValue(parseInt(e.target.value))}
      >
        {attributes.map((attribute) => (
          <option value={attribute.id}>{attribute.name}</option>
        ))}
      </select>
      <button onClick={onAddAttributeClick}>Add {label}</button>
      <div>
        {currentAttributeValues.map((attribute) => (
          <>
            <h2>
              {label}: {attribute}
            </h2>
            <button onClick={(e) => onRemoveAttributeClick(e, attribute)}>
              Remove {label} {attribute}
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default AttributeMultiSelect;
