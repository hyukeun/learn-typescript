// 1.
let numValue: number;
// 2.
let stringValue : string;
// 3.
let boolenValue: boolean ;
// 4.
let undefinedValue: undefined;
// 5.
let nullValue: null; // 1- 5까지 자바스크립트의 기본 원시형 타입이다.
// 6.
let objValue: object;
// 7.
let symbolValue: symbol; // ES6에서 선보인 심볼이라는 원시형 타입이다.
// 8.
let anyValue: any;

// Example
// 1. numberType
numValue = 3.3;
// 2. stringType
stringValue = "hello"; //
stringValue = 'helloHi'; // 
stringValue = `hello ${1+1} hi`; // templete string도 있다.
// 3. boolenType
boolenValue = true;
// 4. undefinedType
undefinedValue = null;
// 5. nullTpye
numValue = null;
numValue = undefined;
// 8. anyType
anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};
// 6. objectType
// 원시형 타입을 제외한 값들이 여기에 할당 될 수 있다.
objValue = { name : 'jay' };
objValue = { };
objValue = new String(33);
// 7 symbolValue
// Symbol이라는 function으로만 호출할 수 있다. new를 사용할 수가 없다.
symbolValue = Symbol()
{
    symbolValue: 'hello'
}
// symbol key로 사용하게 된다.

// Q.
// array를 어떻게 type으로 정의를 하는가?
let nameList : string[];
nameList = ["1", "3"];
nameList.push("hello");
// string으로만 넣을 수 있다. 앞에 당길 각각의 항목들을 type을 만들어 줘야한다.

let user1: { name : string, score: number };
// name과 score만 할당할 수 있는 변수라고 정의할 수있다.

user1 = {
    name : 'jay',
    score: 30
}

let user2 : { name : string, score: number };

let tuple2 : [number, string];
tuple2 = [1,"hello" ]
// 안에 값이 무조건 number와 string으로 나오게 해야 한다.


// 