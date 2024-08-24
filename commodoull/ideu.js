function calculateReciprocal(count, link) {
    // Assuming count is an array and link has source.index and target.index properties
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
}

// Usage
let countArray = [10, 15, 5, 20];
let linkObject = { source: { index: 1 }, target: { index: 3 } };
let result = calculateReciprocal(countArray, linkObject);
console.log(result);  // Output: 0.06666666666666667 (1 / 15)
