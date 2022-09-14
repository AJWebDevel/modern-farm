


import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createPlan } from './plan.js'

const farmPlan = createPlan()


plantSeeds(farmPlan)
console.log(usePlants())
