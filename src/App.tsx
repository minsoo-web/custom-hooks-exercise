import React from "react";
import useInput from "./hooks/useInput";
import useTabs, { TabItem } from "./hooks/useTabs";

const content: TabItem[] = [
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
  const maxLength = (value: string) => value.length <= 10;

  const tabs = useTabs(0, content);

  const name = useInput("Mr.", maxLength);

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
    </>
  );
}

export default App;
