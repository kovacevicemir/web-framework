import axios, { AxiosPromise, AxiosResponse } from "axios";
import { IUserProps } from "./User";

//base url
// const baseUrl = "http://localhost:3000";

interface HasId{
  id?:number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id:number): Promise<IUserProps> {
    try {
      const res = await axios.get<IUserProps>(`${this.rootUrl}/${id}`);
      return res.data;
    } catch (error) {
      throw(error)
    }
  }

  async save(data: T): Promise<IUserProps> {
    try {
      if (data.id !== undefined) {
        return axios.put(`${this.rootUrl}/${data.id}`, data);
      } else {
        return axios.post(`${this.rootUrl}/users`, data);
      }
    } catch (error) {
      throw new Error('Unknown message type:')
    }
  }
}
