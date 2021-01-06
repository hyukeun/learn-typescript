interface Person {
    name: string;
    say(message: string): void;
}
interface Programmer {
    writeCode(requirment: string) : string;
}
// class KoreanProgrammer implements Person, Programmer {
//     constructor(public name : string){
//     }
//     say(message: string): void {
//         console.log(message);
//     }
//     writeCode(requirment: string): string {
//         console.log(requirment);
//         return requirment + '.....';
//     }
//     loveKimchi() {
//         console.log('love~ kimchi~');
//     }
// }

// const jay = new KoreanProgrammer('jay');

// abstract를 사용해서 꼭 가지게 하는 것이다.
abstract class Korean implements Person {
    public abstract jumin: number;
    constructor(public name: string) {}
    say(msg: string) {
        console.log(msg);
    }
    abstract loveKimchi(): void;
}

// 그래서 다시 구현해본다면 다음과 같다.
class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name : string, public jumin: number ){
    // 부모클래스의 생성자를 호출해줘야한다.
    super(name);
}
    say(message: string): void {
        console.log(message);
    }
    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '.....';
    }
    loveKimchi(): void {
        throw new Error ("Method not implemented.");
    }
}
