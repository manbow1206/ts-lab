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

let name1: NAME = { first: 'てしt', last: 'あ' };
let name2: NAME = { first: 'てしt' };

const func1 = (num1: number, num2: number): number => {
  return num1 + num2;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 26,
  city: 'テスト',
  username: 'マンボウ',
  password: 'xxx',
};
// console.log(userA)

// Union Types
let value: string | number;
value = 10;
// value = true;  // NG

let arrayUni: (number | string)[];
arrayUni = [0, 'ストリング', ];
// arrayUni = [0, 'ストリング', true]; // NG


function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
