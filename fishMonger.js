
const mongerInventory = (fishes, price) => {
    let getfish = [];
    for (const fish of fishes) {
        if (fish.price < price && fish.amount > 10) {
            fish.amount = 10
            getfish.push(fish)
        } 
    }

    return getfish
}




module.exports = {mongerInventory}
