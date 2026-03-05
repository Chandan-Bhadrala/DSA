/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    // Refresh the item: delete and re-insert to move it to the "most recent" position
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    
    return val;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // Delete existing key to update its position
        this.cache.delete(key);
    }

    this.cache.set(key, value);

    // If capacity exceeded, remove the "least recently used" (the first item in the Map)
    if (this.cache.size > this.capacity) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
};