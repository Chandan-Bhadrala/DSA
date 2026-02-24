/**
 * Finds the index of the first non-repeating character using a Queue.
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const charCount = {};
    const queue = []; // Stores objects like { char: 'a', index: 0 }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // 1. Update frequency map
        charCount[char] = (charCount[char] || 0) + 1;
        
        // 2. Add current character and index to queue
        queue.push({ char, index: i });

        // 3. "Clean" the queue from the front
        // Remove characters that we now know are duplicates
        while (queue.length > 0 && charCount[queue[0].char] > 1) {
            queue.shift(); 
        }
    }

    // If the queue is empty, no unique characters exist
    return queue.length > 0 ? queue[0].index : -1;
}
