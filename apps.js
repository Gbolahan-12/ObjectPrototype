

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    User.prototype.parent = function(){
        this.fatherName = 'Johnson';
        this.motherName = 'Roselyn';
        return `${this.fatherName}  ${this.motherName}`;
    },
   function owner(){
        value ='mother',
        value = 'father'
        return `${value}`
    }
}
const user1 = new User('Micheal', 'Doe')



function userInfo(firstName, lastName, phone, stateOfOrigin) {
    User.call(this, firstName, lastName);

    this.phone = phone;
    this.stateOfOrigin = stateOfOrigin;
}

const user1Info = new userInfo('Shaun', 'Liam', '121-242-5253', 'Oyun')

// console.log(user1.parent());
// console.log(parent.hasOwnProperty());
// console.log(user1Info);