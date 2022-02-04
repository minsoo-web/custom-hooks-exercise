import { FormEvent, useState } from "react";

const useInput = (initialValue: string, validator: (value: string) => boolean) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    let willUpdate: boolean = true;

    willUpdate = validator(value);

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
