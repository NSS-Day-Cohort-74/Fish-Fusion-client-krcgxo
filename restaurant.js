

const fishMenu = (fishes) => {
    const menu = [] 
    for (const fish of fishes) {
        
            fish.amount /=  2
            menu.push(fish)
        }
        return menu
    }
    





module.exports = {fishMenu}