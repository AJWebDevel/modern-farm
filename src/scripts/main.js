
//Import functions from other js modules

import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createPlan } from './plan.js'
import { harvestPlants } from './harvester.js'
import { createCatalog } from './catalog.js'



let planMaker = createPlan()
plantSeeds(planMaker)

let growingPlants = usePlants()
let currentPlants = harvestPlants(growingPlants)

console.log(createCatalog(currentPlants))

//below code displays results from js to the webpage
const parentHTML = document.querySelector(".messages")
parentHTML.innerHTML = createCatalog(currentPlants)