import { MemberObject } from './members.Interface';
const students = require('students.json');

displayMemberInformation();

function displayMemberInformation () {
    let member: MemberObject;

    console.log('Memebers name: ' + member.name);
    console.log('Memebers email: ' + member.email);
    console.log('Memebers phone: ' + member.phone);
    console.log('Memebers country: ' + member.country);
}