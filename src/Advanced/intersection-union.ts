interface User {
    name: string;
}

interface Action {
    do() : void;
}

// function createUserAction(u: User, a: Action): User & Action {
//     return { ...u, ...a};
// }
// const u = createUserAction({ name: 'jay'}, { do() {} });

// 스프레드를 사용해서 두 개를 합칠 것이다. 

// 유니언 타입으로 사용할 수 있다.
// 2. 추가적으로 작성해준것이다.
function compare(x:string, y: string)
function compare(x:number, y: number)
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number'){
        return x === y ? 0 : x > y ? 1 : -1 ;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
// const v = compare("a",1); 처음 작성과 달리 에러가 나오게 된다.
const v = compare(1,2)
console.log([3,2,1].sort(compare))
console.log(['c','b','a'].sort(compare))

// 나올 수 있게 설정을 해주지만 런타임 오류가 날 수있다 그래서 함수에 대해서 시그니쳐들을 만들어줘서 함수
//  오버로딩에 의해서 문자열과 숫자열을 같이 사용할 수 없게 해줄 수 있다.
// 2. 추가적으로 위에 작성해 줄 것이다.

// compare 라는 함수는 어떻게 보면 쏘팅에 대한 것이다.

function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    if (isAction(v)) {
        v.do()
    } else {
        console.log(v.name)
    }
}
