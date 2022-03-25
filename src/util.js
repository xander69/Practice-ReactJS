export const defaultAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelBlue&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Light'

export function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth().toString().padStart(2, '0')
    let day = date.getDate().toString().padStart(2, '0')
    let hours = date.getHours()
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let seconds = date.getSeconds().toString().padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export function getLastId(array) {
    return Math.max.apply(null, array.map(item => item.id))
}