const arr = [1, 3, 4, 5, 6, 8, 9];

const newArr = arr.map(function(item, index) {
    return item * index;
});

console.log(newArr);