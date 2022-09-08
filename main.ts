input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
})
// Sensor Getar
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Sad)
        music.playTone(659, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) > 900) {
        music.playMelody("C E C5 A F D E G ", 575)
        basic.pause(200)
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 900) {
    	
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 500) {
        music.playMelody("C E C5 A F D E G ", 375)
        basic.pause(200)
    }
    if (pins.analogReadPin(AnalogPin.P3) <= 500) {
        basic.pause(200)
    }
})
