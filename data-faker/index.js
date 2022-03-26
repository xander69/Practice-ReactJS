const {faker} = require('@faker-js/faker')
const fs = require("fs")

faker.setLocale('en')
// faker.setLocale('ru')

const generateData = (usersNumber) => {
    const users = []
    for (let id = 0; id < usersNumber; id++) {
        const gender = faker.name.gender(true)
        const firstName = faker.name.firstName(gender)
        const lastName = faker.name.lastName(gender)
        users.push({
            id: id,
            gender: gender,
            fullName: `${firstName} ${lastName}`,
            avatar: faker.image.avatar(),
            title: faker.name.title(),
            followed: faker.datatype.boolean(),
            country: faker.address.country(),
            city: faker.address.cityName(),
            email: faker.internet.email(firstName, lastName)
        })
    }
    return {
        'users': users
    }
}

// console.log(generateData(10))

fs.writeFileSync(
    "../data-server/db-dev.json",
    JSON.stringify(generateData(50))
);