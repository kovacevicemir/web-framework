import {User} from './models/User';

const user = new User({name:"emir",age:20});

user.set({name:"Emir"})

console.log(user.get("name") + " " + user.get("age"));