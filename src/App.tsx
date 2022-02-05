import React from "react";
import { useClick, useConfirm, useInput, useTabs, useTitle } from "./hooks";

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

  const sayHello = () => console.log("say hello");

  const title = useClick(sayHello);
  const deleteWorld = () => console.log("delete");
  const abort = () => console.log("aborted");

  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

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
      <h1>useClick</h1>
      <h2 ref={title}>title</h2>

      <hr />
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>delete the world</button>
    </>
  );
}

export default App;
