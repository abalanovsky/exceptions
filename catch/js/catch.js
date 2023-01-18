const animals = [
    { name: 'parrot' },
    { name: 'cat' },
    { name: 'horse' },
    { name: 'dog' }
]

function catchAnimal(index){
    try {
        console.log(animals[index].name)
    } catch {
        console.log('Incorrect index was entered')
    }
}

catchAnimal(0)
catchAnimal(5)
