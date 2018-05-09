let item: neopixel.Strip = null


item = neopixel.create(DigitalPin.P2, 256, NeoPixelMode.RGB)
item.setMatrixWidth(8)
item.setBrightness(20)
item.clear()
item.show()

basic.forever(() => {

    for (let i = 0; i < 78; i++) {
        item.clear()
        neopixelc.showChars(item, "  Happy Birthday!", -i * 1, 0, true, NeoPixelColors.Green)
        item.show()
        basic.pause(100)
    }
})
