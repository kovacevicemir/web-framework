import {User} from './models/User';
import axios from 'axios'

const baseUrl = "http://localhost:3000"

const user = new User({id:1});
// user.events.on('test',()=>{console.log('kurac')});
// user.events.trigger('test');

const testing = async () =>{
 const newUser = await user.sync.fetch(1)
 user.set(newUser)
 console.log(user)

 user.sync.save({...newUser,name:"Emir"})
 setTimeout(async ():Promise<any> => {
     const newNewUser = await user.sync.fetch(1)
     console.log(newNewUser)
 }, 3000);
}

testing();






