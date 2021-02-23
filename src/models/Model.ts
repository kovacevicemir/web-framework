interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
    fetch(id:number):Promise<T>;
    save(data:T):Promise<T>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T> {
    constructor(
        private attributes:ModelAttributes<T>,
        private events:Events,
        private sync: Sync<T>
    ){}
}
