interface IUserProps {
  name?: string;
  age?: number;
}

// Alias of function
type Callback = () =>{}

export class User {
  constructor(private data: IUserProps) {}

  get(propName:string):(string|number){
    return this.data[propName];
  }

  set(update:IUserProps):void{
    Object.assign(this.data, update);
  }

  on(eventName: string, callback:Callback){

  }
}
