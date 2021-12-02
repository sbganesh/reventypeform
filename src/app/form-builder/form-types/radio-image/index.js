import React, { useState } from 'react';
import { RadioImagesWrapper, CheckboxOption } from './styled';

const RadioImage = ({ values, questionId, setValue, getValues, onNextStep }) => {
  const [itemChecked, setItemChecked] = useState(getValues(questionId.toString()) || {});  

  const handleChange = (option) => {
    console.log(getValues())
    console.log(questionId)
    let valueSelected = getValues(questionId.toString());
    if(!valueSelected) {
      valueSelected = {};
    }
    console.log(valueSelected)
    console.log(option)
    if(valueSelected.id === option.id) {
      setItemChecked({});
      setValue(questionId.toString(), {});
    } else {
      setItemChecked(option);
      setValue(questionId.toString(), option);
    }
    onNextStep()
  };

  return (
    <RadioImagesWrapper>
      {values.map(val => (
        <CheckboxOption key={val.id}>
          <img src={val.image} alt="" />
          <span style={{color:"black"}}>{val.label}</span>
          <input
            defaultChecked={itemChecked.id === val.id}
            onClick={() => handleChange(val)}
            type="radio" 
            name={questionId} 
            value={val.id} 
          />
          <div></div>
        </CheckboxOption>
      ))}
    </RadioImagesWrapper>
  );
}

export default RadioImage;
