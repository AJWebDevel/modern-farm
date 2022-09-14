//function to create corn seed that returns an array of two seedObjs
export const createCorn = () => {
    let cornSeedArray = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    return cornSeedArray
}