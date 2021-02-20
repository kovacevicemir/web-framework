// Alias of function
type Callback = () => void;

export class Eventing {
  //any key in events will have type of string.
  events: { [key: string]: Callback[] } = {};

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

    handlers.forEach((callback: Callback) => {
      callback();
    });
  }
}
