import React from "react";
import {
  useFadeIn,
  useBeforeLeave,
  useClick,
  useConfirm,
  useInput,
  useTabs,
  useTitle
} from "./hooks";
import usePreventLeave from "./hooks/usePreventLeave";

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

  const { disablePrevent, enablePrevent } = usePreventLeave();

  const begforLife = () => console.log("Please don`t leave");

  useBeforeLeave(begforLife);

  const fadeElement = useFadeIn();
  const fadeElement2 = useFadeIn(3);

  return (
    <>
      <h1>Custom Hooks Playground</h1>

      <hr />
      <h2>useInput</h2>
      <input type="text" placeholder="hi" {...name} />

      <hr />
      <h2>useTabs</h2>

      {content.map((section, index) => (
        <button key={index} onClick={() => tabs.changeItem(index)}>
          {section.tab}
        </button>
      ))}

      <div>{tabs.currentItem.content}</div>

      <hr />
      <h2>useClick</h2>

      <h2 ref={title}>click here and check the console</h2>

      <hr />
      <h2>useConfirm</h2>
      <button onClick={confirmDelete}>delete the world</button>

      <hr />
      <h2>usePreventLeave</h2>

      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>

      <hr />
      <h2>useBeforeLeave</h2>
      <p>mouse leave from window (direction to the top) and check the console</p>

      <hr />
      <h2>useFadeIn</h2>

      <p {...fadeElement}>It is fade in duration with 1s</p>
      <p {...fadeElement2}>It is fade in duration with 3s</p>
    </>
  );
}

export default App;
