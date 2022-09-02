const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

/////////////////////////////////////////////////////////////////////////

const selfMadeMap = (array, func) => {
    const newArray = []
// 1. Взять каждый элемент исходного массива
// 2. Получить из него новое значение
// 3. Поместить значение в новый массив
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        newArray[i] = newValue
    }
    return newArray
}

console.log(selfMadeMap(students, st => `Hi, i'm ${st.name}.`))
console.log(students.map(st => st.name))

/////////////////////////////////////////////////////////////////////////

const selfMadeFilter = (array, func) => {
    const newArray = []
// 1. Взять каждый элемент исходного массива
// 2. Проверить на соответствие условию
// 3. Если соответствует, поместить элемент в новый массив
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i]) // true или false
        if (newValue === true) {
            newArray.push(array[i])
        }
    }
return newArray
}

console.log(selfMadeFilter(students, st => st.scores >= 100))
console.log((students.filter(st => st.scores >= 100)))

/////////////////////////////////////////////////////////////////////////

const selfMadeFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])) return array[i]
    }
}

console.log((students.find(st => st.isMarried === true)))
