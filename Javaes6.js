
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName,lastName);
        
        this.phone = phone;
        this.membership = membership;
    }

    static newNumberCost(){
        return 500;
    }
}

const mary = new Person('William', 'Johnson','222-222-2222','standard');

console.log(Customer.newNumberCost());