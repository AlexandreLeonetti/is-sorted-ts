
function defaultComparator<T>(a: T, b: T): number {
   // Default comparator function
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
 }
 
 function checksort<T>(array: T[], comparator?: (a: T, b: T) => number): boolean {
   // Check if array is sorted
   if (!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array));
   comparator = comparator || defaultComparator;
 
   for (let i = 1, length = array.length; i < length; ++i) {
     if (comparator(array[i - 1], array[i]) > 0) return false;
   }
 
   return true;
 }
 
 export  {checksort};
 