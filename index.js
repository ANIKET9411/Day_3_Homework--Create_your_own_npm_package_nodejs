function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 
function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase()
    ).replace(/\s+/g, '');
}

 
function kebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}

 
function snakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}
 

function reverse(str) {
    return str.split('').reverse().join('');
}

 
function truncate(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str;
}

 
function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

 
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

 
function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}


function replaceAll(str, find, replace) {
    return str.split(find).join(replace);
}

module.exports = {
    capitalize,
    camelCase,
    kebabCase,
    snakeCase,
    reverse,
    truncate,
    isPalindrome,
    countVowels,
    removeWhitespace,
    replaceAll
};

