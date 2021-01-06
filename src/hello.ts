// var hello = "hello";
// let hello1 = "hello1";

// let timeoutPromise = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove("1 sec");
//     }, 1000);
// })
// timeoutPromise.then(console.log);
// // promise 지원하고 있는 라이브러리가 있기 때문에 es5로 안된다. es6부터 나온다.
// // 그래서 라이브러리 옵션을 줘서 컴파일 되도록 할 수도 있다.

import add from './utill.js';

const value = add(1,2);
console.log(value);