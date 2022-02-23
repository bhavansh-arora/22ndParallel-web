export const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
        return value.email.toLowerCase().match(new RegExp(searchTerm, 'g')) 
    })
}