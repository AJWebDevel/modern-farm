//Do I need to import all seed-making functions for this to work? Is there a way to easy-do that?

import { createCorn } from "./seeds/corn.js"

let cornSeed = createCorn
//empty array to take seedObjects added to the field
const plantsInField = []

//function to be exported that adds seed to field
export const addPlant = (plantObj) => {
    for (let plant of plantObj) {
        if (array.isArray(plant)) {
            for (let singularPlant of plant)
                plantsInField.push(singularPlant)

        } else {
            plantsInField.push(plantObj)
        }
        return plantsInField
    }
}

//function to be exported that copies array of plants in field
export const usePlants = () => {
    return plantsInField.map(plant => ({ ...plant }))

}