let something = 0
let to_shoke_or_not_to_shoke = 0
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P12P13, ModuleWorld_Digital.enButton.Press)) {
        to_shoke_or_not_to_shoke = 1
        something = 10
    }
})
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P14P15, ModuleWorld_Digital.enButton.Press)) {
        for (let index = 0; index < 100; index++) {
            if (to_shoke_or_not_to_shoke == 1) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showIcon(IconNames.Sad)
                music.playMelody("C D E F C D E F ", 120)
                basic.showString("have a good morning")
                basic.pause(100)
                TM1650.off()
                to_shoke_or_not_to_shoke = 0
                something = 10
            } else {
                music.playTone(262, music.beat(BeatFraction.Whole))
                TM1650.on()
                TM1650.showNumber(something)
                something += -1
            }
        }
    }
    if (to_shoke_or_not_to_shoke == 0) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playMelody("C5 B A G C5 B A G ", 120)
        basic.showString("have a WET morning")
    } else {
    	
    }
})
