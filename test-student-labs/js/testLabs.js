const labs = [{
        student: 'James',
        runLab: function () {
            return 'Function works'
        }
    },
    {
        student: 'Mary',
        runLab: function () {
            return 'doesn`t work'
        }
    },
    {
        student: 'Robert',
    }]

function gradeLabs(labs){
    labs.forEach(lab => {
    let result = ''
    try {
        if (lab.runLab() === 'Function works') {
            result = 'good'
        } else {
            result = 'bad'
        }
        console.log(`${lab.student} lab status is ${result}`)
    } catch {
        result = 'Error thrown'
        console.log(result)
    }
    })
}

gradeLabs(labs)
