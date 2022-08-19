import { useRef } from "react";

const useRefForm = () => {
  const formRef = useRef();

  console.log("hook rendered");
  const getResult = () => {
    const elementArray = [...formRef?.current?.elements];

    const inputArray = elementArray.filter((i) => {
      //   console.log("i", i.className);

      return i?.className === "input";
    });

    const result = inputArray.reduce((pre, cur) => {
      return { ...pre, [cur.name]: cur.value };
    }, {});
    console.log("hookta resultt", result);

    return result;
  };
  return { formRef, getResult };
};

export default useRefForm;
