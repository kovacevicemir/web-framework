import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

//base url
const baseUrl = "http://localhost:3000";

interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(
    private data: IUserProps,
    public events: Eventing = new Eventing()
  ) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    try {
      const res: AxiosResponse = await axios.get(
        `${baseUrl}/users/${this.get("id")}`
      );
      this.set(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async save(): Promise<void> {
    try {
      const id = this.get("id");
      if (id) {
        axios.put(`${baseUrl}/users/${id}`, this.data);
      } else {
        axios.post(`${baseUrl}/users`, this.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}