import { ChangeEvent, useState } from "react";

interface useFieldProps {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
  }
  
  const useField = (type: string): useFieldProps => {
    const [value, setValue] = useState('');
  
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const reset = () => {
        setValue("");
    }
  
    return {
      type,
      value,
      onChange,
      reset
    };
  };
  
  export default useField;