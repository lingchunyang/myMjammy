export class Food {
    private id: number;
    private name: string;
    private price: number;
    private description: string;
    private img?: string;

    public constructor(id: number, name : string, price : number, description : string, img? : string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }

    public getId(): number {
        return this.id;
    }

    public getName() : string {
        return this.name;
    }

    public getPrice() : number {
        return this.price;
    } 

    public getDescription() : string {
        return this.description;
    }

    public getImage() : string | undefined {
        return this.img;
    } 
}