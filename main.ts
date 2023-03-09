let grade = 65
basic.forever(function () {
    if (grade < 100) {
        basic.showString("A")
    } else if (grade < 90) {
        basic.showString("B")
    } else if (grade < 80) {
        basic.showString("C")
    } else if (grade < 70) {
        basic.showString("F")
    }
})
