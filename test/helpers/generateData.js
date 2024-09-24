const { faker } = require('@faker-js/faker');

function generateName() {
    const fullName = faker.person.fullName();
    return fullName;
}

function generateEmail() {
    const emailAddress = faker.internet.email();
    return emailAddress;
}

function generateSubject() {
    const randomSubject = faker.lorem.sentence({min: 1, max: 3})
    return randomSubject;
}

function generateMessage() {
    const randomMsg = faker.lorem.paragraph({min: 1, max: 3})
    return randomMsg;
}

module.exports = {
    generateName,
    generateEmail,
    generateSubject,
    generateMessage
}