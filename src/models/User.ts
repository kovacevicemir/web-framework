import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(
    private data: IUserProps,
    public events: Eventing = new Eventing(),
    public sync: Sync = new Sync("http://localhost:3000/users"),
  ) {}


  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }
}