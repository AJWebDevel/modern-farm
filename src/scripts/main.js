


import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createPlan } from './plan.js'
import { harvestPlants } from './harvester.js'



let planMaker = createPlan()
plantSeeds(planMaker)

let growingPlants = usePlants()

console.log(harvestPlants(growingPlants))
