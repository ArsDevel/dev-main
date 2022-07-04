function cdnDate() {
    var timestep;
    for (timestep = 0; timestep <= 2300; timestep++) {
        const value = timestep.toString().padStart(4, '0');
    }
    var mouth = "09";
    var day = 16;
    var date = ('2020' + mouth + day);
    var time = 1013;
    var compilateDATE = (date + '_' + timestep);
    var linkCompilate = ("https://jdnowweb-s.cdn.ubi.com/uat/release_tu2/20150928_1740/web/img/avatars512/" + avatarNum + ".png");
}
$(document).ready(function () {
    $(".img-container").append(cdnDate)
});
let unix_timestamp = 1651680551;
var date = new Date(unix_timestamp * 1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(formattedTime);
$(document).ready(function () {
    $("#time").append(formattedTime)
});
var distance = 12;
let roomNumber = 22;
