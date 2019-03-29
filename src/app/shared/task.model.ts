export class Task {
  //  public name :string; thanks to typescript we do not need to declare VAR we can just add the PUBLIC feature inside the constructor<    
  //  public description :string;
  //  public done : boolean ;
    //public inProcess: boolean;

    constructor(public name :string, public description :string, public status : string,)  {} 

}
//here TScript give us the posiblity of creating a shorter object model without the declarations