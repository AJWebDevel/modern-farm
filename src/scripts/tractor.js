//Import seed-making functions & store them in variables 
import { addPlant } from "./field"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const farmPlan = createPlan()
const asparagusCreator = createAsparagus()
const cornCreator = createCorn()
const potatoCreator = createPotato()
const soybeanCreator = createSoybean()
const sunflowerCreator = createSunflower()
const wheatCreator = createWheat()


/*function to be exported that plants seeds (plantSeeds)-
will accept one parameter which is planting plan. */
export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const seed of row) {
            if (seed === "Asparagus") {
                addPlant(seed)
            } else if (seed === "Corn") {
                addPlant(seed)
            } else if (seed === "Potato") {
                addPlant(seed)
            } else if (seed === "Soybean") {
                addPlant(seed)
            } else if (seed === "Sunflower") {
                addPlant(seed)
            } else if (seed === "Wheat") {
                addPlant(seed)
            }
        }
    }
}
    /* w/in function, iterate through the plan (consisting of an
outer and inner array). While iterating rows, if food type from plan 
is a seed function, invoke said seed-maker. 
Add resulting seed to plantsInField array in fields.js
*/