

import { createAsparagus } from './seeds/asparagus.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'

const asparagusSeed = createAsparagus()
const addFieldPlant = addPlant(asparagusSeed)
const usedPlants = usePlants()

console.log(usedPlants)

