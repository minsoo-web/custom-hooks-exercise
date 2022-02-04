import React, { useEffect, useState } from "react";
import { useInput, useTabs } from "./hooks";

const content: useTabs.TabItem[] = [
  {
    tab: "Section1",
    content: "I`m the content of the section 1"
  },
  {
    tab: "Section2",
    content: "I`m the content of the section 2"
  },
  {
    tab: "Section3",
    content: "I`m the content of the section 3"
  }
];

function App() {
  const sayHello = () => console.log("object");

  const maxLength = (value: string) => value.length <= 10;

  const tabs = useTabs.default(0, content);

  const name = useInput("Mr.", maxLength);

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <>
      <div className="App">hi</div>

      <input type="text" placeholder="hi" {...name} />

      <hr />

      {content.map((section, index) => (
        <button key={index} onClick={() => tabs.changeItem(index)}>
          {section.tab}
        </button>
      ))}

      <div>{tabs.currentItem.content}</div>

      <hr />

      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </>
  );
}

export default App;
