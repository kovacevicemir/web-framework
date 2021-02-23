import {User} from './models/User';
import axios from 'axios'

const baseUrl = "http://localhost:3000"

const user = new User({id:1,name:"newew",age:0});

user.on("save",()=>{
    console.log(user, 'saved');
})

user.save();

