let Random_Number = 0
input.onButtonPressed(Button.A, function () {
    Random_Number = randint(0, 4)
    if (Random_Number == 0) {
        basic.showString("Try again")
    } else if (Random_Number == 1) {
        basic.showString("Maybe")
    } else if (Random_Number == 2) {
        basic.showString("Try again later")
    } else if (Random_Number == 3) {
        basic.showString("Yes")
    } else {
        basic.showString("No")
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        # . . . #
        . # # # .
        `)
})
