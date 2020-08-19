

export const validateName = (name) => {
    const nameRegex = /[A-Za-z]/
    if (nameRegex.test(name) === true) {
        return true;
    }
    else {
        return false;
    }
}

export const validateQuantity = (quantity) => {
    const quantityRegex = /(^[1-9]([0-9]*)?$)|(^[0]{1}$)/
    if (quantityRegex.test(quantity) === true) {
        return true;
    }
    else {
        return false;
    }
}

