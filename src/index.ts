import {User} from './models/User';

const user = new User({name:"emir",age:20});

user.on("change",()=>{
    console.log('Change #1')
})
user.on("change",()=>{
    console.log('Change #2')
})
user.on("custom",()=>{
    console.log('Change custom')
})

user.trigger('change');
user.trigger('custom');
user.trigger('customfdsafsa');