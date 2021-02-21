import {User} from './models/User';
import axios from 'axios'

const baseUrl = "http://localhost:3000"

const user = new User({id:1});
// user.events.on('test',()=>{console.log('kurac')});
// user.events.trigger('test');

const testing = async () =>{
 const newUser = await user.sync.fetch(1)
 user.attributes.set(newUser)
 console.log(user)

 user.sync.save({...newUser,name:"Emir 4"})

 setTimeout(async ():Promise<any> => {
     const newNewUser = await user.sync.fetch(1)
     user.attributes.set(newNewUser);
     console.log(user)
 }, 3000);
}

testing();






