input.onButtonPressed(Button.A, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
    basic.pause(100)
    RingbitCar.running_time(RingbitCar.Direction_run.backward, 1)
})
basic.forever(function () {
    soundExpression.happy.playUntilDone()
    soundExpression.sad.playUntilDone()
    soundExpression.spring.playUntilDone()
    soundExpression.slide.playUntilDone()
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . #
        . # # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . # . .
        # # # # .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.pause(500)
})
