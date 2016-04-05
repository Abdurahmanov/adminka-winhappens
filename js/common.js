$(document).ready(function () {
	$.datetimepicker.setLocale('ru');
    $('.calendar-field').datetimepicker({
        format: 'd.m.Y',
        timepicker: false,
        dayOfWeekStart: 1,
    });
});