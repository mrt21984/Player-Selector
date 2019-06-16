$(function () {

    $.getJSON('fighters.json',
        function (json) {

            let figherControl = $("h2");
            let fighterArr = json.fighters;
            let imgArr = $('img');
            let playerSelect = $(".player");

            imgArr.eq(0).attr('src', "images\\" + fighterArr[randomImage(fighterArr.length)] + ".jpg");
            imgArr.eq(1).attr('src', "images\\" + fighterArr[randomImage(fighterArr.length)] + ".jpg");

            figherControl.on("click", function () {
                const root = document.documentElement;
                root.style.setProperty('--attack', 0);
                $("img").eq(0).attr('src', "images\\" + fighterArr[randomImage(fighterArr.length)] + ".jpg")
                $("img").eq(1).attr('src', "images\\" + fighterArr[randomImage(fighterArr.length)] + ".jpg")

            });

            //Player Select
            $(".inner_1").on("click", function () {
                const root = document.documentElement;
               $(".fight").removeClass("animateFight");
               $(".fight").css("border-radius","0%");
               $(".fight").addClass("blinking");
                if (root.style.getPropertyValue('--attack') == 15) {
                    root.style.setProperty('--attack', 0);
                    $(".fight").css("display", "none");
                } else {
                    root.style.setProperty('--attack', 15);
                    $(".fight").css("display", "block");
                }
            });

            //Fight
            $(".fight").on("click", function () {
                const root = document.documentElement;
                $(".fight").removeClass("blinking");
                $(this).css("border-radius","50%");
                $(this).addClass("animateFight");
               
                root.style.setProperty('--scale', 8);

            });

            function randomImage(arr) {
                let rand1 = Number(Math.floor(Math.random() * arr));
                return rand1;
            }
        }
    )

});


