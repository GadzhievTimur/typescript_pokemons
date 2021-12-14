import * as images from "../images/index"

export const getTypeColor = (type: string) => {
    switch (type) {
        case "fire":
            return "#F08030"
        case "poison":
            return "#A040A0"
        case "fighting":
            return "#C03028"
        case "normal":
            return "#A8A878"
        case "water":
            return "#6890F0"
        case "flying":
            return "#A890F0"
        case "grass":
            return "#78C850"
        case "electric":
            return "#F8D030"
        case "ground":
            return "#E0C068"
        case "psychic":
            return "#F85888"
        case "rock":
            return "#B8A038"
        case "ice":
            return "#98D8D8"
        case "bug":
            return "#A8B820"
        case "dragon":
            return "#7038F8"
        case "ghost":
            return "#705898"
        case "dark":
            return "#705848"
        case "steel":
            return "#B8B8D0"
        case "fairy":
            return "#EE99AC"
        default:
            return "white";
    }
}
export const logotype = (type: string) => {
    switch (type) {
        case "fire":
            return images.fire
        case "poison":
            return images.poison
        case "fighting":
            return images.fighting
        case "normal":
            return images.normal
        case "water":
            return images.water
        case "flying":
            return images.flying
        case "grass":
            return images.grass
        case "electric":
            return images.electric
        case "ground":
            return images.ground
        case "psychic":
            return images.psychic
        case "rock":
            return images.rock
        case "ice":
            return images.ice
        case "bug":
            return images.bug
        case "dragon":
            return images.dragon
        case "ghost":
            return images.ghost
        case "dark":
            return images.ghost
        case "steel":
            return images.steel
        case "fairy":
            return images.fairy

    }
}