const fruit = ['apple', 'orange', 'jackfruit']

const numbers = [3, 10, 18, 20]

//kata 1

//execute function once for each array element

function forEachKata(array, callback) {



    for (let i = 0; i < fruit.length; i++) {
        const value = fruit[i]
        console.log(value)
    }
}

console.log(forEachKata())


//kata 2

//create new array with the results of called function

function mapKata(array, callback) {

    let fruitNames = [];

    for (let i = 0; i < fruit.length; i++) {
        fruitNames.push(fruit[i])
    }

    console.log(fruitNames)


}

console.log(mapKata())




//kata 3

//searching the array for numbers less than 10



function someKata(number, callback) {

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 10) {
            console.log("true")
        } else {

            break;
        }
    }
}

console.log(someKata())



//kata4

//return first number that meets condition of statement

function findKata(array, callback) {

    let findNumber = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {

            findNumber.push(numbers[i])
            return findNumber


        }
    }
}

console.log(findKata())



//kata5

// return the index of the first element that is greater than 10

function findIndexKata(num, callback) {

    let findIndex = []

    for (let i = 0; i < numbers.length; i++) {


        findIndex.push(numbers[i])
        return findIndex.indexOf(numbers[i])



    }
}


console.log(findIndexKata())


//kata6

// return true if every item in array meets condition

function everyKata(num, callback) {

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 2) {
            console.log("true")

        } else {
            break;
        }
    }
}

console.log(everyKata())


//kata7

// create a new array with all elements that pass the test given by the function

function filterKata() {

    let newFruit = []

    for (i = 0; i < fruit.length; i++) {

        if (fruit[i] < 6) {

            newFruit.push(fruit[i])
        } else {
            break;
        }

        console.log(newFruit)

    }


}

console.log(filterKata())