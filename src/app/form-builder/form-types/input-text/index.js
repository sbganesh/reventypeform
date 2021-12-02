import { Button } from 'app/form-builder/form-components/button/styled';
import React, { useState } from 'react';
import { InputWrapper, Input } from './styled';

const InputText = ({ placeholder, register, questionId, onNextStep }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleOk = () => {
    console.log("ok")
    onNextStep()
  }

  return (
    <InputWrapper>
      <Input 
        value={value} 
        {...register(questionId.toString())}
        name={questionId.toString()}
        onChange={handleChange}
        placeholder={placeholder}
        required={true}
        style={{color: "black"}}
      />
      <Button style={{marginTop:40, width:155, height:45, color: "white",  backgroundColor: "#ff858a"}} onClick={handleOk}> OK </Button>
    </InputWrapper>
  );
}

export default InputText;