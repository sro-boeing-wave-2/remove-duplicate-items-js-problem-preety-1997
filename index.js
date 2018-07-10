/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const set = new Set(items);
  return Array.from(set);
};

module.exports = removeDuplicateItems;
