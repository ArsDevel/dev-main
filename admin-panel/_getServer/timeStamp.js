var cdn = "https://jdnowweb-s.cdn.ubi.com/uat/dev_wdf/";

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function keyGenNX(jQuery, loc, cdn, response) {

    var state = {
        "prod": "prod",
        "demo": "demo",
        "uat": "uat",
        "cert": "cert",
    };

    var year = getRandomInRange(2020, 2022); // random()
    var month = getRandomInRange(10, 12); // random(1 => 12)
    var day = getRandomInRange(10, 31); // random(1 => 31)

    var hours = getRandomInRange(1, 18); // random(0 => 23)
    var minutes = getRandomInRange(0, 60); // random(0 => 60)


    function makeRand(num) {
        var usedNumbers = [];
        function f() {
            if (usedNumbers.length == num)
                usedNumbers = [];
            var i = Math.floor(Math.random() * num) + 1;
            return usedNumbers.includes(i) ? f() : (usedNumbers.push(i), i)

        }
        return f;
    }

    var x = makeRand(59);

    // It is necessary the each part is performed in turn
    // or at the same time. Yes?

    // <a href="/index.php/samcss/vvedenie-v-css" hreflang="ru">Введение в CSS</a>

    var iTime = "20200406_12" + x();

    var url = "https://jdnowweb-s.cdn.ubi.com/demo/dev/" + iTime + "/web/img/beat.png";

    var html = '<a href="' + url + '" hreflang="ru">' + iTime + '</a>';
    var br = "<br>"

        console.log(iTime);

    $(document).ready(function () {
        $("#container").append(html, br)
    });

    /*

    if (response.statusCode !== 200) {
    url.appnedTo.$("body");
    } else {
    console.log("Url not found!", iTime);

    // error message in "body"
    }

     */

}

for (var i = 0; i <= 60; i++) {
    setTimeout(keyGenNX);
}
