import {User} from './models/User';
import axios from 'axios'

const baseUrl = "http://localhost:3000"

const user = new User({id:1});

user.on("change",()=>{
    console.log(user);
})

user.fetch()

