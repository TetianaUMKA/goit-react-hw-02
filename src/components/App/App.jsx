// import { useState } from 'react'

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

import css from "./App.module.css";

function App() {
  return (
    <>
      <div className={css.container}>
        <Description />
        <Options />
        <Feedback />
      </div>
    </>
  );
}

export default App;
