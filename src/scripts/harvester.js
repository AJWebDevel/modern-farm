
// define and export harvestPlants function 
//accepts plantsInField array as parameter
// return array of seed objects 
//iterate through plantsInField array- pluck out value of output for each obj
//add output value amount of said plant to array returned by function
/* with corn, 1/2 sold before tht many of objects are added to array)*/

export const harvestPlants = (plantedPlantArray) => {
    let fieldHarvest = []

    for (const plant of plantedPlantArray) {
        if (plant.type === "Corn") {
            let afterSaleCornCount = plant.output * 0.5
            //move to fieldHarvest array here
            plant.output = afterSaleCornCount
            for (let i = 0; i < plant.output; i++) {
                fieldHarvest.push(plant)

            }

        } else {
            //get plant.output then add corresponding number of identical seedObjs to array
            for (let i = 0; i < plant.output; i++) {
                fieldHarvest.push(plant)
            }
        }
    }
    return fieldHarvest
}