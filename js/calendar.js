/*
 Author URI: http://indianbendsolutions.com
 License: GPL
 
 GPL License: http://www.opensource.org/licenses/gpl-license.php
 
 This program is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
function ibs_util_19() {
    return 'AIzaSyBwcmfwl7W1aMyo9wnXwmASRfZ0sOhGhRc'; //see http://fullcalendar.io/docs/google_calendar/
}
function IsEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
}
function CalendarObj($, args, mode) {
    this.init(args, mode)
}
(function ($) {
    CalendarObj.prototype.init = function (args, mode) {
        var cal = this;
        this.args = args;
        this.mode = mode;
        this.id = args['id'];
        //this.ibs_events;
        this.calendar = $('#fullcalendar-' + this.id);
        this.options = {
            'id': '1',
            'feeds': {},
            'ajaxUrl': null,
            'ajaxData': null,
        };
        for (var arg in args) {
            if (typeof this.options[arg] !== 'undefined') {
                this.options[arg] = args[arg];
            }
        }
        this.qtip_params = function (event) {
            var fmt = cal.fullcalendar_options.timeFormat;
            var title = args.qtip.title.replace('%title%', event.title);
            var location = '';
            if (typeof event.location !== 'undefined' && event.location !== '') {
                location = args.qtip.location.replace('%location%', event.location);// <p>%location%</p>
            }
            var description = '';
            if (event.source.nodesc === false && typeof event.description !== 'undefined' && event.description !== '') {
                description = args.qtip.description.replace('%description%', event.description); // '<p>%description%</p>'
            }
            var time = '';
            time = moment(event.start).format("ddd MMM DD " + fmt) + moment(event.end).format(' - ' + fmt);
            if (event.allDay) {
                time = moment(event.start).format("ddd MMM DD") + '  All day';
            }
            time = args.qtip.time.replace('%time%', time);// <p>time<p>
            var order = args.qtip.order.replace('%title%', title).replace('%location%', location).replace('%description%', description).replace('%time%', time);
            return {
                content: {'text': order},
                position: {
                    my: 'bottom center',
                    at: 'top center'
                },
                style: {
                    classes: args['qtip']['style'] + ' ' + args['qtip']['rounded'] + args['qtip']['shadow']

                },
                show: {
                    event: 'mouseover'
                },
                hide: {
                    fixed: true,
                    delay: 250,
                    event: 'mouseout mouseleave'

                }
            };
        }
        this.fullcalendar_options = {
            'timezone': 'local',
            'height': null,
            'theme': true,
            'firstDay': '1',
            'weekends': true,
            'lang': 'en_us',
            'timeFormat': 'hh:mm a',
            'titleFormat': 'YYYY MMM DD',
            'dayNamesShort': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            'defaultView': 'month',
            'eventLimit': 6,
            'eventLimitClick': 'popover',
            'aspectRatio': 1.0,
            'editable': false,
            'hiddenDays': '',
            'fixedWeekCount': true,
            'weekNumbers': false,
            'defaultDate': moment()
        };
        for (var arg in args) {
            if (typeof this.fullcalendar_options[arg] !== 'undefined' && args[arg] !== '') {
                this.fullcalendar_options[arg] = args[arg];
            }
        }
        this.fullcalendar_options.header = {
            left: args['headerLeft'],
            center: args['headerCenter'],
            right: args['headerRight']
        };
        this.fullcalendar_options.loading = function (bool) {
            if (bool && mode !== 'widget') {
                var position = $('#fullcalendar-' + cal.options['id']).position();
                var w = $('#fullcalendar-' + cal.options['id']).width();
                var h = $('#fullcalendar-' + cal.options['id']).height();
                $('#ibs-loading-' + cal.options['id']).css({'left': position.left, 'top': position.top, 'width': w, 'height': h}).show();
            } else {
                $('#ibs-loading-' + cal.options['id']).hide();
            }
        };
        this.fullcalendar_options.eventRender = function (event, element, view) {
            if (mode === 'widget' || args.hideTitle) {
                element.css('color', element.css('background-color'));
            }
            element.css('cursor', 'pointer');
            if (mode !== 'admin' || view.name === 'month') {
                element.qtip(cal.qtip_params(event));
            }
        };
        this.fullcalendar_options.eventClick = function (calEvent, jsEvent, view) {
            if (calEvent.source.nolink) {
                return false;
            }
            if (calEvent.source.altlink !== '') {
                var altlink = calEvent.source.altlink.replace('%id%', calEvent.id);
                window.open(altlink);
                return false;
            }
            if (calEvent.url) {
                window.open(calEvent.url);
                return false;
            }
            return true;
        }
        this.fullcalendar_options.dayClick = function (date_moment, jsEvent, view) {
            if (mode !== 'widget' && 1 == 2) { //disable in version 2.1
                switch (view.name) {
                    case 'month' :
                        $(cal.calendar).fullCalendar('changeView', 'agendaWeek');
                        $(cal.calendar).fullCalendar('gotoDate', date_moment);
                        break;
                    case 'basicWeek':
                    case 'agendaWeek':
                        $(cal.calendar).fullCalendar('changeView', 'agendaDay');
                        $(cal.calendar).fullCalendar('gotoDate', date_moment);
                        break;
                    case 'basicDay':
                    case 'agendaDay':
                        break;
                }
            }
        };
        this.fullcalendar_options.eventAfterAllRender = function (view) {
            if (args.event_list !== 'none' && $('#list-display-' + cal.id).is(':checked')) {
                var event_table = '#event-table-' + cal.id;
                var fullcalendar = "#fullcalendar-" + cal.id;
                var events = $(fullcalendar).fullCalendar('clientEvents');
                events.sort(function (a, b) {
                    return moment(a.start) - moment(b.start);
                });
                var result = [];
                if (args.list_past === false || args.list_repeat === false) {
                    for (var i = 0; i < events.length; i++) {
                        if (typeof events[i].repeat === 'string' && (events[i].repeat !== null && events[i].repeat !== '') && args.list_repeat === false) {
                            continue;
                        }
                        if (args.list_past === false && moment() > moment(events[i].start)) {
                            continue;
                        }
                        result.push(events[i]);
                    }
                    events = result;
                }
                events = events.slice(0, args.list_max);
                $(event_table).empty();
                if (mode !== 'widget') {
                    $(event_table).css({'border': '1px solid silver'})
                            .append($('<tbody>')
                                    .append($('<tr>').addClass('ui-widget-header')
                                            .append($('<th>').text('Day').css('padding', '3px'))
                                            .append($('<th>').text('Time').css('padding', '3px'))
                                            .append($('<th>').text('Event').css('padding', '3px'))
                                            .append($('<th>').text('Location').css('padding', '3px'))
                                            ));
                    for (var i = 0; i < events.length; i++) {
                        var pattern = 'ddd Do';
                        var past = moment() > moment(events[i].start) ? '*' : '';
                        var d = moment(events[i].start).format(pattern);
                        var t = moment(events[i].start).format(cal.fullcalendar_options.timeFormat);
                        if (typeof events[i].location === 'undefined' || events[i].location === null || events[i].location === '') {
                            var l = '<span style="visibility:hidden">undefined</span>';
                        } else {
                            l = '<span>' + events[i].location + '</span>';
                        }
                        var title = null;
                        if (events[i].source.nolink) {
                            title = $('<a href="#" class="no-click">').html(past + events[i].title);
                        } else {
                            if (events[i].source.altlink !== '') {
                                title = $('<a>').attr({href: events[i].source.altlink + events[i].id, target: '_blank'}).html(past + events[i].title);
                            } else {
                                title = $('<a>').attr({href: events[i].url, target: '_blank'}).html(past + events[i].title);
                            }
                        }
                        $(event_table).find('tbody')
                                .append($('<tr>')
                                        .prop('disabled', past)
                                        .append($('<td>').text(d).css('padding', '3px'))
                                        .append($('<td>').text(t).css('padding', '3px'))
                                        .append($('<td>')
                                                .append(title))
                                        .append($('<td>').html(l).css('padding', '3px'))
                                        );
                    }
                } else {
                    $(event_table).css({'border': '1px solid silver'})
                            .append($('<tbody>')
                                    .append($('<tr>').addClass('ui-widget-header')
                                            .append($('<th>').text('Events').css('padding', '3px'))
                                            ));
                    for (var i = 0; i < events.length; i++) {
                        past = moment() > moment(events[i].start) ? '*' : '';
                        var title = null;
                        if (events[i].source.nolink) {
                            title = $('<a href="#" class="no-click">').html(past + events[i].title);
                        } else {
                            if (events[i].source.altlink !== '') {
                                title = $('<a>').attr({href: events[i].source.altlink + events[i].id, target: '_blank'}).html(past + events[i].title);
                            } else {
                                title = $('<a>').attr({href: events[i].url, target: '_blank'}).html(past + events[i].title);
                            }
                        }

                        $(event_table).find('tbody')
                                .append($('<tr>').qtip(cal.qtip_params(events[i]))
                                        .append($('<td>')
                                                .append(title))
                                        );
                    }

                }
                $('.no-click').on('click', '', {}, function (event) {
                    event.preventDefault();
                });
            }
        };
        this.renderCalendar = function () {

            if (args.event_list === 'none') {
                $('#list-display-' + cal.id).parent().css('display', 'none');
            } else {
                $('#list-display-' + cal.id).prop('checked', args.event_list === 'show');
            }
            if (args.legend) {
                $('#legend-list-' + cal.id).css('display', 'block');
            }
            this.calendar.fullCalendar(this.fullcalendar_options);
            for (var feed in this.options.feeds) {
                if (this.options.feeds[feed].url !== '' && this.options.feeds[feed].enabled) {
                    var event_source = {
                        'googleCalendarApiKey': function () {
                            if (typeof cal.options.feeds[feed]['key'] === 'string' && cal.options.feeds[feed]['key'] !== '') {
                                return cal.options.feeds[feed]['key'];
                            } else {
                                return ibs_util_19();
                            }
                        },
                        'nolink': this.options.feeds[feed]['nolink'],
                        'nodesc': this.options.feeds[feed]['nodesc'],
                        'altlink': this.options.feeds[feed]['altlink'],
                        'feedName': this.options.feeds[feed]['name'],
                        'textColor': this.options.feeds[feed]['textColor'],
                        'backgroundColor': this.options.feeds[feed]['backgroundColor'],
                        'url': this.options.feeds[feed]['url'],
                        'googleCalendarId': IsEmail(this.options.feeds[feed]['url']) ? this.options.feeds[feed]['url'] : null
                    };
                    this.calendar.fullCalendar('addEventSource', event_source);
                    $('#legend-list-' + cal.id)
                            .append($('<span>').addClass('ibs-legend-color').css({'background-color': this.options.feeds[feed]['backgroundColor']}))
                            .append($('<span>').addClass('ibs-legend-name').text(this.options.feeds[feed]['name']))
                }
            }
            if (args.ibsEvents) {
                this.calendar.fullCalendar('addEventSource',
                        {events: function (start, end, timezone, callback) {
                                var result = [];
                                for (var ex in cal.ibs_events) {
                                    var event = cal.ibs_events[ex];
                                    if (false == event.recurr) {
                                        var s, e, es, ee;
                                        s = start.unix();
                                        e = end.unix();
                                        es = moment(event.start).unix();
                                        ee = moment(event.end).unix();
                                        //      s---------------------e
                                        //          es---------ee                       (es >= s && en <= e) ||
                                        //  es----------ee                              ( ee > s && ee < e) ||
                                        //                    es---------ee             (es >= s && es <= e) || 
                                        //  es----------------------------------ee      (s >= es && e <= ee) || 
                                        if ((es >= s && ee <= e) || (ee > s && ee < e) || (es >= s && es <= e) || (s >= es && e <= ee)) {
                                            result.push(event);
                                        }
                                    } else {
                                        var exceptions = [];
                                        if (event.exceptions) {
                                            exceptions = event.exceptions.split(',');
                                            for (var i in exceptions) {
                                                exceptions[i] = moment(exceptions[i]).startOf('day');
                                            }
                                        }
                                        var rule = new RRule(RRule.parseString(event.repeat));
                                        var dates = rule.between(start.toDate(), end.toDate());
                                        for (i in dates) {
                                            dates[i] = moment(dates[i]).startOf('day');
                                        }
                                        var isException = function (index) {
                                            for (var i in exceptions) {
                                                if (exceptions[i].diff(dates[index]) === 0) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        }
                                        var duration = moment(event.end).diff(moment(event.start), 'seconds');
                                        var start_time = moment(event.start).unix() - moment(event.start).startOf('day').unix();

                                        for (var i in dates) {
                                            if (isException(i)) {
                                                continue;
                                            }
                                            var theDate = dates[i].startOf('day');
                                            var current = {
                                                start: theDate.add(start_time, 'seconds').format(),
                                                end: theDate.add(duration, 'seconds').format(),
                                                id: event.id,
                                                title: event.title,
                                                allDay: event.allDay,
                                                color: event.color,
                                                textColor: event.textColor,
                                                description: event.description,
                                                url: event.url,
                                                repeat: event.repeat,
                                                exceptions: event.exceptions
                                            }
                                            result.push(current);
                                        }
                                    }
                                    for (var i in result) {
                                        result[i].textColor = '#ffffff';
                                        result[i].editable = false;
                                    }

                                }
                                callback(result);
                            }
                        }
                );

            }
            if (args.event_list !== 'none') {
                if (args.event_list === 'show') {
                    $('#event-list-' + cal.id).show();
                }
                $('#list-display-' + cal.id).click(function (event) {
                    if ($('#list-display-' + cal.id).is(':checked')) {
                        $('#fullcalendar-' + cal.id).fullCalendar('rerenderEvents');
                        $('#event-list-' + cal.id).show();
                    } else {
                        $('#event-list-' + cal.id).hide();
                    }
                });
            } else {
                $('#list-display-div-' + cal.id).hide();
            }
        };
        if (args.ibsEvents) {
            $.get(cal.options.ajaxUrl, {
                action: 'ibs_calendar_get_events',
                cache: false,
                dataType: 'json'
            }).then(
                    function (data) {
                        if (data !== "") {
                            data = decodeURIComponent(data);
                            cal.ibs_events = JSON.parse(data);
                            for (var i in cal.ibs_events) {
                                cal.ibs_events[i].title = jQuery('<div>').html(cal.ibs_events[i].title).text();
                                cal.ibs_events[i].description = jQuery('<div>').html(cal.ibs_events[i].description).text();
                                cal.ibs_events[i].editable = false;
                                cal.ibs_events[i].start = moment.unix(parseInt(cal.ibs_events[i].start)).format();
                                cal.ibs_events[i].end = moment.unix(parseInt(cal.ibs_events[i].end)).format();
                            }
                            console.log("IBS Events loaded.");
                        } else {
                            cal.ibs_events = [];
                        }

                        //----------------------------------------------------------
                        cal.renderCalendar();
                        //----------------------------------------------------------

                    },
                    function () {
                        console.log("Get IBS Events failed.");
                    });
        } else {
            cal.renderCalendar();
        }

    };
}(jQuery));