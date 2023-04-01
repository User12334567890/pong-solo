scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
	
})
let mySprite: Sprite = null
let myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile, 10, 110)
mySprite.setPosition(0, 0)
scene.centerCameraAt(80, 60)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    `, SpriteKind.Player))
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP
)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . . 1 1 1 1 
    `, SpriteKind.Player))
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.TWO,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.SPACE,
MakeyMakey.MakeyMakeyKey.LEFT_CLICK
)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(1, 55)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(150, 55)
