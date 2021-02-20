import axios, { AxiosResponse } from "axios";

interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Alias of function
type Callback = () => void;

//base url
const baseUrl = "http://localhost:3000"

export class User {
  constructor(private data: IUserProps) {}

  //any key in events will have type of string.
  events: { [key: string]: Callback[] } = {};

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // assign event to handlers or empty [] if events undefined.
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    //check if handler/s exist
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
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
        axios.put(`${baseUrl}/users/${id}`,this.data);
      } else {
        axios.post(`${baseUrl}/users`,this.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
