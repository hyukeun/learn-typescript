interface User {
    name: string;
}

interface Product {
    id : string;
    price: number;
}

class Cart {

    // 접근 제한자로 설정이 가능하다.
    // public 작성안할시 기본적으로 들어가 있다.
    // private 할경우 나오지 않는다. cartJohn. 에서 선택시 

    // protected user: User;
    // private store: object;

    constructor(protected user: User, private store: object = {} ) {
    // 생성자 매개변수에 접근성도 동시에 작성할 수 있다.
        // this.user = user;
        // this.store = {};
    }
    public put(id: string, product: Product) {
        this.user.name;
        this.store[id] = product;
    }
    private get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user.name;
    }
}

const cart2 = new PromotionCart ({ name: 'john'});
cart2.addPromotion();
const cartJohn = new Cart ({ name : 'john'});
const cartJay = new Cart({ name : 'jay'});