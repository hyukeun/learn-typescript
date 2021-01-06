enum StarbuksGrade {
    WELCOME,
    GREEN,
    GOLD
}

// 중간의 순서가 중요하다 열거하기 떄문이다. 그래서 초기의 값을 설정해 줘야한다.

// enum StarbuksGrade {
//     WELCOME = 0,
//     ADDGRADE = 3,
//     GREEN = 1,
//     GOLD = 2
// }

// 또는 문자열로만 enum의 정의를 할 수 있다.

// enum StarbuksGrade {
//     WELCOME = "WELCOME"
//     GREEN = "GREEN"
//     GOLD = "GOLD"
// }

function getDicound(v: StarbuksGrade): number {
    switch ( v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDicound(StarbuksGrade.GREEN));
// console.log(getDicound(StarbuksGrade.GREEN === "GREEN");
// console.log(StarbuksGrade.GREEN);
// 출력하게 되면 다음과 같이 나오는 것을 알 수 있다. 
// true
// { WELCOME : 'WELCOME', GREEN : 'GREEN', GOLD:'GOLD'}

console.log(StarbuksGrade["0"]);