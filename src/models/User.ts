import { Model } from "./Model";
import {Attributes} from "./Attributes";
import {Eventing} from "./Eventing";
import {ApiSync} from "./ApiSync";


export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<IUserProps>{
  static buildUser(attrs:IUserProps):User{
    return new User(
      new Attributes<IUserProps>(attrs),
      new Eventing(),
      new ApiSync<IUserProps>("http://localhost:3000/users")
    )
  }
}

