class Animals{
    protected color;
    constructor(){

    }

    public get(){
        return this.color ;
    }

    public set(x:string){
        this.color = x;
    }

}

export {
    Animals
}