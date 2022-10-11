import { Food } from "./menue-page/food";

export class CartItem {
    private food: Food;
    private price: number;
    private qtty: number;

    public constructor(food: Food){
        this.food = food;
        this.qtty = 1;
        this.price = food.getPrice();
    }

    public getFood(): Food {
        return this.food;
    }

    public getQtty(): number {
        return this.qtty;
    }

    public getPrice(): number {
        return this.price;
    }

    public increaseQtty(){
        this.qtty++;
        this.setPrice();
    }

    public decreaseQtty(): number {
        if(this.qtty > 0) {
            this.qtty--;
            this.setPrice();
        }
        return this.qtty;
    }

    private setPrice() {
        this.price = this.food.getPrice() * this.qtty;
    }
}