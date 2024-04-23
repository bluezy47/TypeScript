
// Strctual type...
type UserX = {
    name: string;
    email: string;
    age: number;
}

type UserY = {
    name: string;
}

// Now `UserX` is a subtype of `UserY` ( UserX <: UserY )
let userX: UserX = {
    name: 'John Doe',
    email: 'anuruddha@gmail.com',
    age: 25
}
// This is valid because `UserX` is a subtype of `UserY`
let userY: UserY = userX;
console.log(userY);
