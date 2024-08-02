/**
 *
 * Searches for an object in an array by a specific key.
 *
 * @param {Array.<Object>} arrayObject
 * @param {String} key
 * @returns the object searched by key entry
 */
const findObjectByKey = (arrayObject, key) => {
    const userObject = arrayObject.filter((item) => item.username === key);
    return userObject[0];
};

export default findObjectByKey;
