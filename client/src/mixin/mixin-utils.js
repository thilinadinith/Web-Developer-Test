export const getImage = (name) => {
    return require('../../public/images/' + name + '.png')
}

export const roundNumbers = (number) => {
    return Number((Math.round(number * 100) / 100).toFixed(2));
}

export const removeDecimals = (value) => {
    return parseInt(value);
}