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
arrayUni = [0, 'ストリング'];
// arrayUni = [0, 'ストリング', true]; // NG

// Literal Types (Union Types and Litera)
let company: 'Facebook' | 'Google' | 'Amazon';
company = 'Amazon';

let memory: 256 | 512;
memory = 256;

// typeof
// JSONオブジェクトの複雑な構造と型をしていて、それらを一気に型推論してくれる
let message: string = 'Hi!';
let message1: typeof message;
message1 = 'string';
// message1 = 10; // NG

let animal = { cat: 'small cat' };
let newAnumal: typeof animal = { cat: 'big cat' };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;

const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseboll',
};

let keySports: keyof typeof SPORTS;
keySports = 'soccer';
keySports = 'baseball';
// keySports = 'basketball'; // NG

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Mac,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Linux,
};

// 型の互換性
const comp1 = 'test';
let comp2: string = comp1;

// let comp3: string = 'test';
// let comp4: 'test' = comp3

// let funcComp1 = (x: number) => {};
// let funcComp2 = (x: string) => {};
// funcComp1 = funcComp2;
// funcComp2 = funcComp1;

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
