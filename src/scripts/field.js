//Do I need to import all seed-making functions for this to work? Is there a way to easy-do that?

import { createCorn } from "./seeds/corn.js"

let cornSeed = createCorn
//empty array to take seedObjects added to the field
const plantsInField = []

//function to be exported that adds seed to field
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (let seed of seedObj) {
            plantsInField.push(seed)
        }
    } else {
        plantsInField.push(seedObj)
    }
}

//function to be exported that copies array of plants in field
export const usePlants = () => {
    return plantsInField.map(plant => ({ ...plant }))

}