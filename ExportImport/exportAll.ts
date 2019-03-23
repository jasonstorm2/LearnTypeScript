class All{
    protected color;
    public  dd:number = 4;
    constructor(){
        let ff:number = 6; 

    }

    public get(){
        return this.color ;
    }

    public set(x:string){
        this.color = x;
    }

}


export {All};

// 重新导出animal导出的模块AnimalsAsName,并重命名他
export {AnimalsAsName as renameAll} from "./animal";