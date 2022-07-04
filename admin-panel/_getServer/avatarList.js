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

    var avatarNum = getRandomInRange(0, 1809); // random(0 => 60)
    var avatarNumZ = 0; // random(0 => 60)


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

    var url = "https://jdnow-api-contentapistoragest.justdancenow.com/avatars/" + avatarNum + ".png";

    var html = '<a href="' + url + '">' + avatarNum + '</a>';
    var imgContainer = '<div class="img-container avatar" img-id="' + avatarNum + '"><span>' + avatarNum + '</span> <img width="100" src="' + url + '" class="avatar-img"></div>';
    var br = "<br>"

        console.log(avatarNum);

    $(document).ready(function () {
        $("#container").append(imgContainer, br)
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

for (var i = 0; i <= 229; i++) {
    setTimeout(keyGenNX);
}
