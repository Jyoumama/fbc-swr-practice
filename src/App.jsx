import React from "react";
import useSWR from "swr";
import "./App.css";

const fetcher = ([url,headers]) => 
  fetch(url, { headers }).then((res) => res.json());

function App() {
  //const url = "https://invalid-url";
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const  { data, error, isLoading } = useSWR([url,headers], fetcher);

  if (error) return <div> Failed to load. </div>;
  if (isLoading) return <div> Loading... </div>;

  return (
    <div>
      <h1>Status :{data.description}</h1>
    </div>
  );
}

export default App;
