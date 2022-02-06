import React, { memo } from "react";
import { useAxios } from "../hooks";

function ExampleUseAxios() {
  const { loading, data, error, refetching } = useAxios({
    options: { url: "https://yts.mx/api/v2/list_movies.json" }
  });
  console.log(data);

  return (
    <div>
      <h2>useAxios example</h2>
      <h3>{loading ? "Loading..." : "Loaded"}</h3>
      <button onClick={refetching}>refetching!</button>
    </div>
  );
}

export default memo(ExampleUseAxios);
