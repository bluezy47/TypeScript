// For Testing.....
// make a new object
var Jenny91;
Jenny91 = {
    userName: 'jenny',
    fullName: 'Jenny Doe',
    birthDate: new Date('1990-01-01'),
    nic: '900101-1234',
    email: 'jenny@gmail.com',
    phone: '0771234567',
    homeAddress: '123, Main Street, Colombo 01',
    prvJobs: ['ABC Company', 'XYZ Company'],
    getBasicInfo: function () {
        return "".concat(this.fullName, " - ").concat(this.email);
    }
};
//
console.log(Jenny91.getBasicInfo());
