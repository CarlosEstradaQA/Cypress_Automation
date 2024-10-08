/**
 *
 * @param {Array.<Object>} arrayObject
 * @param {String} key
 * @returns the object searched by key entry
 */
const returnObjectSearchingByKey = (arrayObject, key) => {
    const userObject = arrayObject.filter((item) => item.username === key);
    return userObject[0];
};

export default returnObjectSearchingByKey;
