class Animals{
    protected color;
    public  dd:number = 4;
    // let ff2:number = 6; //这种结构放在此处会出问题
    constructor(){
        let ff:number = 6; //在构造器或者方法中就不会有问题

    }

    public get(){
        return this.color ;
    }

    public set(x:string){
        this.color = x;
    }

}

//导出整个类，注意，不是对象
export {
    Animals as AnimalsAsName
}