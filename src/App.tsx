import React from 'react';
import './App.css';

const name = 'hello';

let nameChaneg = 'hello';
nameChaneg = 'hello';

let username = 'manbow';
let dummyNum = 10;
let dummyBool = true;
let dummyArryBool = [true, false];
let dummyArryNum = [10, 20, 30];
let dummyArryString = ['ストリング', '愛うえろ', 0, true];
interface NAME {
  first: string;
  last?: string;
}

let name1: NAME = {first: "てしt", "last": "あ"}
let name2: NAME = {first: "てしt"}

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
