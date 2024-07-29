/**
 *
 * @param {Array.<Object>} arrayObject
 * @param {String} key
 * @returns the object searched by key entry
 */
export const returnObjectSearchingByKey = (arrayObject, key) => {
    var userObject = arrayObject.filter(function (item) {
        return item.username == key;
    });
    return userObject[0];
};