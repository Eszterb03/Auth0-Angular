const filling = (transable) => {
    if (transable <= 5) {
        return 1;
    } else if (5 < transable && transable <= 10) {
        return 2;
    } else if (10 < transable) {
        return (((transable + 3) / (3)));

    };
};

const pricing = (package) => {
    let divider = package % 10
    let dividerLarge = package % 21
    console.log(divider);

    if (package <= 10) {
        return (`5 láda:` + Math.ceil(package / 5));
    } else if (package >= 10) {
        if (divider < 5) {
            return (`10 láda:` + Math.floor(package / 10));
        } else if (divider === 5) {
            return (`10 láda:` + Math.floor(package / 10));
        } else if (divider > 5 || divider === 0) {
            return (`10 láda:` + Math.ceil(package / 10))
        };
    } else if (package > 10 && package % 15 === 0) {
        return (`15 láda` + Math.floor(package / 15));
    } else if (package > 10) {
        if (dividerLarge < 5) {
            return (`21 láda:` + Math.floor(package / 10));
        } else if (dividerLarge === 0) {
            return (`21 láda:` + Math.floor(package / 10));
        } else if (dividerLarge > 5 || divider === 0) {
            return (`21 láda:` + Math.ceil(package / 10));
        }
    };
};