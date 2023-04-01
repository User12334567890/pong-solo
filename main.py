def on_hit_wall(sprite, location):
    pass
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

myDart = darts.create(img("""
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
    """),
    SpriteKind.projectile,
    10,
    110)
scene.center_camera_at(80, 60)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.W,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.TWO,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.DOWN,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.SPACE,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO))


