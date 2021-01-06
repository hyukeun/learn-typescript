// 타입 별칭
// 인터페이스와 비슷하지만 직접 이름에 작성할 수 있다.
// 타입 키워드를 이용해서 작성할 수 있다.

interface User {
    name: string;
}

interface Acton {
    do(): void;
}

// 정의한 두타입을 인터섹션 타입으로 정의하고 부여해 보자

type UserActon = User & Acton;
// function createUserAction(): UserActon {
//     return {
//         do() {},
//         name: ''
//     }
// }
type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
    name: string;
    login(): boolean;
}

class UserImpl implements User2 {
    login(): boolean {
        throw new Error("Method not implemented.")
    }
    name: string;
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2) : UserState{
    if (user.login()) {
        return "APPROVED";
    } else {
        return "REJECTED";
    }
}