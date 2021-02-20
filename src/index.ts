import {User} from './models/User';
import axios from 'axios'

const baseUrl = "http://localhost:3000"

const user = new User({name:"new record",age:0});

console.log(user);

User.kurcina();