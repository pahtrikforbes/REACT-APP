function goTo(number) {
    $('ul.pager li:eq(' + number + ') a').tab('show');
    upgradePreNext(number);
}
function upgradePreNext(number) {
    if (number > 1) {
        $('ul.pager li:eq(0)').attr("onclick", "goTo(" + (number - 1) + ")");
        $('ul.pager li:eq(0)').attr("class", "previous");
    } else {
        $('ul.pager li:eq(0)').attr("class", "disabled");
    }
    if (number < 5) {
        $('ul.pager li:eq(6)').attr("onclick", "goTo(" + (number + 1) + ")");
        $('ul.pager li:eq(6)').attr("class", "next");
    } else {
        $('ul.pager li:eq(6)').attr("class", "disabled");
    }
}
$(document).ready(function () {
    $('li a').on('click', function (e) {
        goTo((e.target.innerHTML) - 0);
    });
});
