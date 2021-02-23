import { getParsedCommandLineOfConfigFile } from "typescript";

export class Attributes<T> {
  constructor(private data:T){}

 //get<K extends keyof T>(key: K)
 //K can only be one of keys of T
 //T[K] return that object key value
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll():T{
    return this.data;
  }
}