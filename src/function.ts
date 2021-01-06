

function add(x: number, y: number) {
    return x + y;
}

// add (1, "2"); 같이 작성할 때 에러가 나오는 것을 알 수있다. 

const result = add(1,2);
// result에 넣어주게 되면 이것또한 number type으로 정의가 되는 것을 알 수 있다.

function buildUserInfo(name = "-", email = "-") {
    return { name , email };
}

// es6에 default parameter
const user = buildUserInfo();
// arrow function 으로 type으로 만들 수 잇다.
const add2 = (a : number, b : number) => a + b;
// 반환되져아하는 값의 타입을 직접적으로 작성해서 작성할 수도 있다. 
// 함수의 오버로딩에 대해서 사용도 가능하다.

interface Storage {
    a: string;
}

interface ColdStorage {
    b : string;
}


function store(type: "통조림"): Storage
function store(type: "아이스크림") : ColdStorage

function store(type: "통조림" | "아이스크림") {
    if(type === "통조림") { 
        return { a : "통조림"}
    } else if ( type === "아이스크림") {
        return { b : "아이스크림"}
    } else {
        throw new Error('unsupported type');
    }
} 

const s = store("아이스크림");
