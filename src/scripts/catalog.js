//define and export createCatalog function
//accepts harvestedFood array as argument
//iterate thru array, putting each food name interpolated into html




export const createCatalog = (currentPlantStock) => {
    let htmlString = ``
    for (const plant of currentPlantStock) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }

    return htmlString
}