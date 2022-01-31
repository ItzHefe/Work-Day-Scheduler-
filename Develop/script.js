var today = moment().format("dddd, MMMM Do");
var currentTime = moment().format("H A");

// hourly calendar entries //
var workDay = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
];

// puts live day in Jumbotron //
$("#currentDay").text(today);

// placing rows on page //
workDay.forEach(function(timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColored = rowColored(timeLabel);
    var row =
    '<div class="time-block" id="' + 
    index + '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-end pr-3 pt-3">' +
    timeLabel + '</div><textarea class="form-control ' + 
    blockColored + '">' +
    timeBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
});

// coloring the rows //
function rowColored (time) {
    var rowNow = moment(currentTime, "H A");
    var rowTime = moment(time, "H A");
    if (rowNow.isBefore(rowTime) === true) {
        return "future";
    } else if (rowNow.isAfter(rowTime) === true) {
        return "past";
    } else {
        return "present";
    }
}
