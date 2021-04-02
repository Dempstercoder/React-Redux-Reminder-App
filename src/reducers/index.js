import { ADD_REMINDER } from '../constants';

//helper function  
const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random(),
    }
}

//reducer
const reminders = (state = [], action) => {
 let reminders = null;
 switch(action.type) {
     case ADD_REMINDER:
       reminders = [...state, reminder(action)];
       console.log('reminders as state', reminders);
       return reminders;
    default:
        return state;
 }
}

export default reminders;

//use a switch statement if you are expecting to add more than one type of action in the future.

//case lets us change the reminder

//current state is copied in to the array.