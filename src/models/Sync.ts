import axios, { AxiosPromise, AxiosResponse } from "axios";

//base url
// const baseUrl = "http://localhost:3000";

interface HasId{
  id:number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id:number): Promise<AxiosPromise> {
    try {
      const res: AxiosResponse = await axios.get(`${this.rootUrl}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async save(data: T): Promise<AxiosPromise> {
    try {
      if (data.id) {
        return axios.put(`${this.rootUrl}/${data.id}`, data);
      } else {
        return axios.post(`${this.rootUrl}/users`, data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
