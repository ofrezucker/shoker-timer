let human = 0
let waite = 0
pins.digitalWritePin(DigitalPin.P0, 1)
let to_shoke_or_not_to_shoke = 0
let _ = 0
let something = 10
TM1650.on()
music.setVolume(255)
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P12P13, ModuleWorld_Digital.enButton.Press)) {
        to_shoke_or_not_to_shoke = 1
        something = 10
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    to_shoke_or_not_to_shoke = 0
    _ = 0
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P14P15, ModuleWorld_Digital.enButton.Press) && !(ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P12P13, ModuleWorld_Digital.enButton.Press))) {
        human = 0
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        for (let index = 0; index < waite; index++) {
            TM1650.showNumber(waite)
            basic.pause(1000)
            waite += -1
            if (human == 1) {
                break;
            }
        }
        for (let index = 0; index < 10; index++) {
            if (to_shoke_or_not_to_shoke == 1 || human == 1) {
                human = 0
                waite = 0
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.pause(100)
                to_shoke_or_not_to_shoke = 0
                something = 10
                _ = 1
                break;
TM1650.showSring("have a good morning")
                TM1650.clear()
            } else {
                music.playTone(494, music.beat(BeatFraction.Whole))
                TM1650.showNumber(something)
                something += -1
                TM1650.showNumber(something)
                basic.pause(500)
            }
        }
        if (to_shoke_or_not_to_shoke == 0 && _ == 0) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            something = 10
            waite = 0
        }
    }
})
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P14P15, ModuleWorld_Digital.enButton.Press) && ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P12P13, ModuleWorld_Digital.enButton.Press)) {
        waite += 30
        basic.pause(1000)
        TM1650.showNumber(waite)
    }
})
basic.forever(function () {
    if (ModuleWorld_Digital.PIR(ModuleWorld_Digital.mwDigitalNum.P2P3, ModuleWorld_Digital.enPIR.OPIR) && human == 0) {
        human = 1
    }
})
