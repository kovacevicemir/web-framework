import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  constructor(
    attrs:IUserProps,
    public attributes: Attributes<IUserProps> = new Attributes<IUserProps>(attrs),
    public events: Eventing = new Eventing(),
    public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl)
  ) {}
}

