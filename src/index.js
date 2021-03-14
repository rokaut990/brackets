module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    const usualBracketsStack = [];
    str.split("").forEach((item) => {
        bracketsConfig.forEach((config) => {
            if (
                item === config[0] &&
                usualBracketsStack[usualBracketsStack.length - 1] !== config[1]
            ) {
                usualBracketsStack.push(config[0]);
            } else if (
                item === config[1] &&
                config[0] === usualBracketsStack[usualBracketsStack.length - 1]
            ) {
                usualBracketsStack.pop();
            }
        });
    });
    return !usualBracketsStack.length;
};
