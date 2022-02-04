import React from "react";
import { useInput, useTabs, useTitle } from "./hooks";

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
  const maxLength = (value: string) => value.length <= 10;

  const tabs = useTabs.default(0, content);

  const name = useInput("Mr.", maxLength);

  const titleUpdater = useTitle("Loading...");

  setTimeout(() => {
    titleUpdater("title");
  }, 1500);

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
    </>
  );
}

export default App;
