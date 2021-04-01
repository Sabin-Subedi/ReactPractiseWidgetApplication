import React, { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";

const items = [
  {
    title: "What is react?",
    description: "React is the frontend library",
  },
  {
    title: "What is react-router?",
    description: "React is the frontend library",
  },
  {
    title: "What is react components?",
    description: "React is the frontend library",
  },
  {
    title: "How to use React?",
    description: "React is the frontend library",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color blue",
    value: "blue",
  },
  {
    label: "the color yellow",
    value: "yellow",
  },
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a Color"
          options={options}
          selected={selected}
          selector={setSelected}
        />
      </Route>
    </div>
  );
}
