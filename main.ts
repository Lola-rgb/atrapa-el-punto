input.onButtonPressed(Button.A, function () {
    if (Punto.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Punto: game.LedSprite = null
Punto = game.createSprite(2, 2)
basic.forever(function () {
    Punto.move(1)
    Punto.ifOnEdgeBounce()
    basic.pause(500)
})
