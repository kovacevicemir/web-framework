import { AxiosPromise, AxiosResponse } from "axios";
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
    attrs: IUserProps,
    public attributes: Attributes<IUserProps> = new Attributes<IUserProps>(
      attrs
    ),
    public events: Eventing = new Eventing(),
    public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl)
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: IUserProps) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("cannot fetch without id");
    }

    this.sync
      .fetch(id)
      .then((res: IUserProps) => {
        this.set(res);
      })
      .catch((e: any) => {
        console.log(`could not fetch user with id: ${id} `);
      });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: IUserProps): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
