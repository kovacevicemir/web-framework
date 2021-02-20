interface IUserProps {
  name?: string;
  age?: number;
}

// Alias of function
type Callback = () => void;

export class User {
  //any key in events will have type of string.
  events:{ [key:string]:Callback[] } = {}

  constructor(private data: IUserProps) {}

  get(propName:string):(string|number){
    return this.data[propName];
  }

  set(update:IUserProps):void{
    Object.assign(this.data, update);
  }

  on(eventName: string, callback:Callback):void{
    // assign event to handlers or empty [] if events undefined.
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
