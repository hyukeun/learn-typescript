interface DB<T> {
    add(v: T): void;
    get(): T;
}
// 작성 후 class에서 implements DB<T>를 통해 만들 수 있다.

class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    } 
    get(): T {
        throw new Error("Method not implemented.");
    }
}

interface JSONSerialier {
    serialize() : string;
}

// class LocalDB<T> {}
class LocalDB<T extends JSONSerialier> implements DB<T> {
    constructor(private localStroageKey: string) {
    }
    add(v : T){
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
// interface User { name: string }

// const userDb = new LocalDB<User>('user');
// userDb.add({ name: 'jay' });
// const userA = userDb.get();
// userA.name;

// 조건부 타입에서 제네릭을 사용하는 방법

interface Veigtable {
    v : string;
}
interface Meat {
    m : string;
}
interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat
}
const cart1: Cart2<Veigtable> = {  
    getItem() {
        return {
            v: ''
        }
    }
}

cart1.getItem()