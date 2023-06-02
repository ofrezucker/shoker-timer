pins.digitalWritePin(DigitalPin.P0, 1)
let to_shoke_or_not_to_shoke = 0
let _ = 0
let something = 10
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
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P14P15, ModuleWorld_Digital.enButton.Press)) {
        for (let index = 0; index < 10; index++) {
            if (to_shoke_or_not_to_shoke == 1) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showIcon(IconNames.Sad)
                basic.showString("have a good morning")
                basic.pause(100)
                TM1650.off()
                to_shoke_or_not_to_shoke = 0
                something = 10
                _ = 1
                break;
            } else {
                music.playTone(494, music.beat(BeatFraction.Whole))
                basic.showNumber(something)
                something += -1
                basic.pause(100)
            }
        }
        if (to_shoke_or_not_to_shoke == 0 && _ == 0) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Happy)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showString("have a WET morning")
            something = 10
        }
    }
})
