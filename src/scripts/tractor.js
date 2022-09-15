//Import seed-making functions & store them in variables 
import { addPlant } from "./field.js"
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


/*function to be exported that plants seeds (plantSeeds)- will accept one parameter
 which is planting plan. */
export const plantSeeds = (plantingPlan) => {
    /* w/in function, iterate through the plan (consisting of an outer and inner array). 
    While iterating rows, if food type from plan is a seed function, invoke said seed-maker. 
    Add resulting seed to plantsInField array in fields.js
    */
    for (const row of plantingPlan) {
        for (const foodType of row) {
            if (foodType === "Asparagus") {
                addPlant(asparagusCreator)
            } else if (foodType === "Corn") {
                addPlant(cornCreator)
            } else if (foodType === "Potato") {
                addPlant(potatoCreator)
            } else if (foodType === "Soybean") {
                addPlant(soybeanCreator)
            } else if (foodType === "Sunflower") {
                addPlant(sunflowerCreator)
            } else if (foodType === "Wheat") {
                addPlant(wheatCreator)
            }
        }
    }
}