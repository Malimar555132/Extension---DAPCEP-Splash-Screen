/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * DAPCEP SPLASH SCREEN
 */
//% weight=100 color=#0fbc11 icon="\uf008"
namespace DAPCEP {
    /**
     * DAPCEP splash screen before playing game
     */
    //% block="DAPCEP Splash Screen"
    export function DAPCEP_splash_screen(): void {
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111aaaaaaaaaaaaaa1111111111111111111aaaaaaaaaaa111111111aaaaaaaaaaaaaa1111111111111111111aaaaaaaaaa111111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaa11111111111111
            1111111aaaaaaaaaaaaaaaaa111111111111111aaaaaaaaaaaa111111111aaaaaaaaaaaaaaaaa1111111111111aaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaa11111111111
            1111111aa1aaaaaaaaaaaaaaaa1111111111111aaaaaaaaaaaa111111111aaaaaaaaaaaaaaaaaaa1111111111aaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa111111111
            1111111a1aaaaaaaaaaaaaaaaaa111111111111aaaaaaaaaaaaa11111111aaaaaaaaaaaaaaaaaaaa11111111aaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaa11111111
            1111111111aaaaaa1aaaaaaaaaaa1111111111aaaaaaaaaaaaaa11111111aaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaa1111111
            11111111111aa111111aaaaaaaaaa111111111aaaaaaaaaaaaaa11111111aaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaa1111111
            1111111111111111111aaaaaaaaaaa1111111aaaaaaaaaaaaaaaa1111111aaaaaaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaa111111
            1111111aa11111aaaaaaaaaaaaaaaa1111111aaaaaaaaaaaaaaaa1111111aaaaaaaaa1111aaaaaaaaaa11aaaaaaaaaaaa111111a11111aaaaaaaaa11111111111111aaaaaaaaa111aaaaaaaaaa111111
            1111111aaa11aaaaa11aaaaaaaaaaaa111111aaaaaaaaaaaaaaaa1111111aaaaaaaaa11111aaaaaaaaa11aaaaaaaaaa11111111111111aaaaaaaaa11111111111111aaaaaaaaa1111aaaaaaaaa111111
            1111111aaa1aaaaa11111aaaaaaaaaa11111aaaaaaaa11aaaaaaaa111111aaaaaaaaa11111aaaaaaaaa1aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaa1111aaaaaaaaa111111
            1111111aaaaaaaaa11111aaaaaaaaaa11111aaaaaaaa11aaaaaaaa111111aaaaaaaaa1111aaaaaaaaaa1aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaa1111aaaaaaaaa111111
            1111111aaaaaaaa1111111aaaaaaaaa11111aaaaaaaa11aaaaaaaa111111aaaaaaaaa111aaaaaaaaaaa1aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaa111aaaaaaaaaa111111
            1111111aaaaaaa11111111aaaaaaaaa1111aaaaaaaaa11aaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaa11aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaa111111
            1111111aaaaaaa1111111aaaaaaaaaa1111aaaaaaaa1111aaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaa11aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaa1111111
            1111111aaaaaaa111111aa11aaaaaaa1111aaaaaaaa1111aaaaaaaa11111aaaaaaaaaaaaaaaaaaaaa111aaaaaaaaaa111111111111111aaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaa11111111
            1111111aaaaaaa1111111111aaaaaaa111aaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaa11111111111111aaaaaaaaa11111111111111aaaaaaaaaaaaaaaaaaa111111111
            1111111aaaaaaa1111111111aaaaaaa111aaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa111111aaaaaaaaaa11111111111111aaaaaaaaa11111111111111aaaaaaaaaaaaaaaaaa1111111111
            1111111aaaaaaaa111111111aaaaaaa111aaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaa111111111aaaaaaaaaaaaa1111aa11111aaaaaaaaa11111111111111aaaaaaaaaaaaaaaa111111111111
            1111111aaaaaaaa111111111aaaaaa111aaaaaaaaaaaaaaaaaaaaaaaa111aaaaaaaaa11111111111111111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            1111111aaaaaaaa11111111aaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaa111aaaaaaaaa11111111111111111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            1111111aaaaaaa111111111aaaaaa1111aaaaaaaa11111111aaaaaaaaa11aaaaaaaaa111111111111111111aaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            1111111aaaaaaaaaaaaaaaaaaaa11111aaaaaaaaa11111111aaaaaaaaa11aaaaaaaaa1111111111111111111aaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            1111111aaaaaaaaaaaaaaaaaaa111111aaaaaaaaa11111111aaaaaaaaa11aaaaaaaaa11111111111111111111aaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            1111111aaaaaaaaaaaaaaaaa11111111aaaaaaaaa11111111aaaaaaaaa11aaaaaaaaa1111111111111111111111aaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaa1111111111111111111
            11111111aaaaaaaaaaaa11111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaa11111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777777777177717717777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777777777177717777777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777777777711177777777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777111777777777777777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777111177777117777777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777711117771711777777777777777777777777777777111133333333333333333333333333333333333333333333331111111
            1111111aaaaaa1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117777111111171771777777777777777777777777777777111133333333333333333333333333333333311333333333331111111
            1111111aaaaaa1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11117771117111117117777777777777777777777777777777111133333333333333333333333333333311111111333333331111111
            1111111aaaaa111111111aaaaaaaaaaaaaaaaaaaaa1111aaaaaaa11117771177771111777777777777111777777777777177777111133333333333333333333333333311111111111111333331111111
            11111111aaaa111111111aaaaaaaaaaaaaaaaaaaa111111aaaaaa11117711777777111117777777711111777777777771111177111133333333333333333333333331111111111111111111331111111
            11111111aaaa111111111aaaaaaaaaaaaaaaaaaaa1111111aaaaa11117117777777711117777777111111177777777711111117111133333333333333333333331111111111111111111111111111111
            111111111aaa111111111aaaaaaaaaaaaaaaaaaa11111111aaaaa11111117777777711117777777111111177777777711111117111133333333333333333331111111111111111111111111111111111
            111111111aaaa1111111aaaaaaaaaaaaaaaaaaaa11111111aaaa111111177777777117777777777111111117777777111111117111133333333333333331111111111111111111111111111111111111
            1111111111aaa111111aaaaaaaaaaaaaaaaaaaaaa1111111aaaa111111777777771117777777777711111111111117111111177111133333333333331111111111111111111111111111111111111111
            11111111111aaaa111aaaaaaaaaaaaaaaaaaaaaaa111111aaaa1111117771111111177777777777711111111111111111111177111133333333331111111111111111111111111111111111111111111
            1111111a11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111aaaa11111117711111111777777777777711111111111111111111177111133333333111111111111111111111111111111111111111111111
            1111111a11111111aaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaa111111117111111117777777777777711111111111111111111777111133333111111111111111111111111111111111111111111111111
            1111111aa1111111111aaaaaaaaa11111aaaaaaaaaaaaaa11111111111111111117777777777777111111111111111111111177111133331111111111111111111111111111111111111111111111111
            1111111aa11111111111aaaaaaa1111111aaaaaaaaa111111111a11111111111177777777777711111111111111111111111111111133331111111111111111111111111111111111111111111111111
            1111111aaa11111111111aaaaa11111111aaaaaaa11111111111a11111111111777771117777711111111177777777111111111111133331111111111111111111111333333333333333111111111111
            1111111aaaa11111111111aaaa111111111aaaaa11111111111aa11111111117777771111117111111117777777777771111111111133331111111111111111111133333333333333333333111111111
            1111111aaaa111111111111aaa111111111aaaa11111111111aaa11111111117777711111111111111777777777777777711111111133333111111111111111113333331111111111113333331111111
            1111111aaaa1111111111111aa111111111aaa111111111111aaa11111111177777711111111111117777777777777777771111111133333333111111111111333331111111111111111113331111111
            1111111aaaa1111111111111aa11111111aaa111111111111aaaa11111111777777111111111111177777777777777777777111111133333333333111111113333111111111111111111111131111111
            1111111aaaa11111111a11111aa1111111aaa111111111111aaaa11111117777777711111111111177777777777777777777111111133333333333113311133311111111111111111111111111111111
            1111111aaaa11111111aaa111aaa11111aaa1111111111111aaaa11111117777777777111111111777777777777777777177711111133333333333113333333111111111111111111111111111111111
            1111111aaaa11111111aaaa11aaaaaaaaaaa1111a11111111aaaa11111177777777777711111111777711111111111111177711111133333333333113333333111111111111111111111111111111111
            1111111aaaaa1111111aaaaa11aaaaaaaaaa11aaa11111111aaaa11111777777777777777111117777111111111111111777771111133333333333113333333111111111111111111111111111111111
            1111111aaaaa111111aaaaaaa1aaa111aaa11aaaa11111111aaaa11117777777777777777111117771117117777111777777771111133333333333113333333111111111111111111111111111111111
            1111111aaaaa111111aaaaaaa1aa11111aa11aaaa11111111aaaa11117777777777777771111117771777117777111777777771111133333333333113333333111111111111111111111111111111111
            1111111aaaa11111111aaaaaaaaa11111aa1aaaa1111111111aaa11117777777777777771111117777777117777117777777771111133333333331111333333111111111111111111111111111111111
            1111111aaaa11111111aaaaaaa1a11111a1aaaaa1111111111aaa11117777777777777771111117777771117777117777777771111133333333331111333333111111111111111111111111111111111
            1111111aaaa11111111aaaaaaaaa11111a1aaaaa1111111111aaa11117777777777777771111117777771117777117777777771111133333333331111333333111111333333333333333311111111111
            1111111aaaa11111111aaaaaaaaa11111aaaaaaa1111111111aaa11117777777777777777111117777771117771117777777771111133333333331111333333111333333333333333333333111111111
            1111111aaaa11111111aaaaaaaaa11111aaaaaaa1111111111aaa11117777777777777711111117777771177771117777777711111133333333311111333333111333333333333333333333111111111
            1111111aaa111111111aaaaaaaaa11111aaaaaaa1111111111aaa11117777777777771111111111777771177777111117777711111133333333311111133333311111333333333333333111111111111
            1111111aaa111111111aaaaaaaaa11111aaaaaaa1111111111aaa11117777777777111111111111777771177777111117777111111133333333311111133333331111111111111111111111131111111
            1111111aaa1111111111aaaaaaaa11111aaaaaa111111111111aa11117777777777111111111111177777777777777777777111111133333333331111333333333311111111111111111113331111111
            1111111aaa1111111111aaaaaaaa111111aaaaa111111111111aa11117777777777111111111111117777777777777777771111111133333333333333333333333333333111111111133333331111111
            1111111aaa1111111111aaaaaaaa111111aaaaa111111111111aa11117777777777711111111111111777777777777777711111111133333333333333333333333333333333333333333333331111111
            1111111aaa1111111111aaaaaaaa111111aaaaa111111111111aa11117777777777711111111111111177777777777777111111111133333333333333333333333333333333333333333333331111111
            1111111aaaa11111111aaaaaaaaa111111aaaaaa1111111111aaa11117777777777771177777111111111777777777711111111111133333333333333333333333333333333333333333333331111111
            1111111aaaa11111111aaaaaaaaa111111aaaaaaa11111111aaaa11117777777777777777777711111111111777711111111111111133333333333333333333333333333333333333333333331111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `);
        pauseUntil(() => controller.A.isPressed());
        pause(100);
        game.setDialogFrame(img`
            ..eeeeeeeeeeeeeeeeeeee..
            .eeeeeeeeeeeeeeeeeeeeee.
            eeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeee
            eeeee11111111111111eeeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeee1111111111111111eeee
            eeeee11111111111111eeeee
            eeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeee
            .eeeeeeeeeeeeeeeeeeeeee.
            ..eeeeeeeeeeeeeeeeeeee..
        `);
        game.setDialogTextColor(15);
        game.showLongText("A DAPCEP PRODUCTION", DialogLayout.Bottom);
        pauseUntil(() => controller.A.isPressed());
    }
}


