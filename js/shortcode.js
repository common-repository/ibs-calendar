
function Shortcode(args) {
    this.run(args);
}
jQuery(document).ready(function ($) {
    Shortcode.prototype.run = function (args) {
        var shortcode = this;
        $('#shortcode-options')
                .append($('<div id="sc-topbar">').addClass('ibs-dialog-header ibs-shortcode-div').css({width: '425px'})
                        .append($('<div id="available-feeds">').addClass('ibs-shortcode-div'))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('lang(uage)'))
                                .append($('<select id="ibs-sc-lang" name="lang">').addClass('shortcode-option')
                                        .append($('<option value="">'))))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('event list'))
                                .append($('<select name="event_list">').addClass('shortcode-option')
                                        .append($('<option value="none">None</option>'))
                                        .append($('<option value="show">Show</option>'))
                                        .append($('<option value="hide">Hide</option>')))
                                .append($('<label>').text('max'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({name: 'max', value: args.list_max, size: 6, min: 1, step: 1, type: 'number'}).css({width: '60px'}))
                                .append($('<label>').text('past'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'past', value: "on", type: 'checkbox'}).prop('checked', args.list_past))
                                .append($('<label>').text('repeats'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'repeat', value: "on", type: 'checkbox'}).prop('checked', args.list_repeat))
                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('check'))
                                .append($('<label>').text('hideTitle'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'hideTitle', value: "on", type: 'checkbox'}).prop('checked', false))
                                .append($('<label>').text('ibsEvents'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'ibsEvents', value: "on", type: 'checkbox'}).prop('checked', args.ibsEvents))
                                .append($('<label>').text('legend'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'legend', value: "on", type: 'checkbox'}).prop('checked', args.legend)))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text(''))
                                .append($('<label>').text('weekends'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'weekends', value: "on", type: 'checkbox'}).prop('checked', args.weekends))
                                .append($('<label>').text('theme'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'theme', value: "on", type: 'checkbox'}).prop('checked', args.theme))
                                .append($('<label>').text('editable'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'editable', value: "on", type: 'checkbox'}).prop('checked', args.editable)))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text(''))
                                .append($('<label>').text('fixedWeekCount'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'fixedWeekCount', value: "on", type: 'checkbox'}).prop('checked', args.weekends))
                                .append($('<label>').text('weekNumbers'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'weekNumbers', value: "on", type: 'checkbox'}).prop('checked', args.editable)))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('dim'))
                                .append($('<label>').text('align'))
                                .append($('<select name="align">').addClass('shortcode-option')
                                        .append($('<option value="alignleft">Left</option>'))
                                        .append($('<option value="aligncenter">Center</option>'))
                                        .append($('<option value="alignright">Right</option>')))
                                .append($('<label>').text('width'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'width', value: args.width, size: 6, type: 'text'})))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('height'))
                                .append($('<input>').addClass('shortcode-option').attr({id: 'ibs-sc-height', name: 'height', value: args.height ? args.height : 'null', size: 3, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-height-help">').text('Help'))
                                .append($('<div id="sc-dropdown-height" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'})
                                                .append($('<li>')
                                                        .append($('<input class="sc-height-item" value="null" name="height" type="radio"/>'))
                                                        .append($('<span>').text('null default')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-height-item" value="auto" name="height" type="radio"/>'))
                                                        .append($('<span>').text('auto')
                                                                ))
                                                .append($('<li>')
                                                        .append($('<input class="sc-height-item" value="number" name="height" type="radio"/>'))
                                                        .append($('<input id="sc-height" min="100" inc="50" value="" size="5" type="number">').css({width: '75px'}))
                                                        .append($('<span style="width:auto">').text('set height')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-height-update" >').text('Update')))).hide()
                                        )
                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('aspectRatio'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({name: 'aspectRatio', value: args.aspectRatio, size: 3, min: 0.1, max: 5.0, step: 0.1, type: 'number'})))

                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('hiddenDays'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-hiddendays', name: 'hiddenDays', value: args.hiddendays, size: 30, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-hiddendays-help">').text('Help'))
                                .append($('<div id="sc-dropdown-hiddendays" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'})
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="0" type="checkbox">'))
                                                        .append($('<span>').text('Sunday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="1" type="checkbox">'))
                                                        .append($('<span>').text('Monday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="2" type="checkbox">'))
                                                        .append($('<span>').text('Tuesday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="3" type="checkbox">'))
                                                        .append($('<span>').text('Wednesday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="4" type="checkbox">'))
                                                        .append($('<span>').text('Thursday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="5" type="checkbox">'))
                                                        .append($('<span>').text('Friday')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="6" type="checkbox">'))
                                                        .append($('<span>').text('Saturday')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-hiddendays-update" >').text('Update')))).hide()
                                        )

                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('dayNameShort'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-dns', name: 'dayNamesShort', value: args.dayNamesShort, size: 30, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-dns-help">').text('Help'))
                                .append($('<div id="sc-dropdown-dns" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'})
                                                .append($('<li>')
                                                        .append($('<label>').text('Sun'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Sun" type="text" size="10"/>')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Mon'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Mon" type="text" size="10"/>')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Tue'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Tue" type="text" size="10" />')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Wed'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Wed" type="text" size="10" />')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Thu'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Thru" type="text" size="10" />')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Fri'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Fri" type="text" size="10" />')))
                                                .append($('<li>')
                                                        .append($('<label>').text('Sat'))
                                                        .append($('<input class="sc-dns-item" name="dayNamesShort" value="Sat" type="text" size="10" />')))
                                                .append($('<li>')
                                                        .append($('<a id="ibs-sc-dns-update" >').text('Update')))).hide()
                                        )
                                )

                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('event'))
                                .append($('<label>').text('LimitClick'))
                                .append($('<select name="eventLimitClick">').addClass('shortcode-option')
                                        .append($('<option value="none" >none</option>'))
                                        .append($('<option value="week" >week</option>'))
                                        .append($('<option value="day">day</option>')))
                                .append($('<label>').text('Limit'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-limit', name: 'eventLimit', value: args.eventLimit, size: 3, type: 'text'}).css({width: '75px'}))
                                .append($('<a href="#" id="ibs-sc-limit-help">').text('Help'))
                                .append($('<div id="sc-dropdown-limit" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'})
                                                .append($('<li>')
                                                        .append($('<input class="sc-limit-item" value="true" name="eventlimit" type="radio">'))
                                                        .append($('<span style="width:auto;">').text('Limit to cell capacity')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-limit-item" value="false" name="eventlimit" type="radio">'))
                                                        .append($('<span style="width:auto;">').text('no limit')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-limit-item" value="number" name="eventlimit" type="radio">'))
                                                        .append($('<input id="sc-event-limit-number" min="1" max="20" inc="1" value="" type="number">'))
                                                        .append($('<span style="width:auto;">').text(' set limit')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-limit-update" >').text('Update')))).hide()
                                        )
                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('time'))
                                .append($('<label>').text('Zone'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'timeZone', value: args.timeZone, size: 8, type: 'text'}))

                                .append($('<label>').text('Format'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'timeFormat', value: args.timeFormat, size: 8, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-timeformat-help">').text('Help'))
                                .append($('<div id="sc-dropdown-timeFormat" class="sc-dropdown ">')
                                        .append($('<div class="sc-dropdown-panel">').css({'width': '300px'})
                                                .append($('<div>').html(
                                                        '<div><label style="width:75px; display:inline-block"><b>24 Hour</b></label><span style="width:auto;"> H = 00...23,  HH = 00..23</span></div>'
                                                        + '<div><label style="width:75px; display:inline-block"><b>12 Hour</b></label><span style="width:auto;">h = 1...12, hh = 01...12</span> </div>'
                                                        + '<div><label style="width:75px; display:inline-block"><b>Minute</b></label><span style="width:auto;"> m = 1..59, mm = 01..59</span> </div>'
                                                        + '<div><label style="width:75px; display:inline-block"><b>Second</b></label><span style="width:auto;"> s = 1..59, ss 01..59</span></div>'
                                                        + '<div><label style="width:75px; display:inline-block"><b>Am/Pm</b></label><span style="width:auto;"> A = AM PM, a =  am pm</span></div>')
                                                        .append($('<a href="#" id="ibs-sc-timeformat-update" >').text('close'))))
                                        .hide()))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('title'))
                                .append($('<label>').text('Format'))
                                .append($('<input>').addClass('shortcode-option').attr({name: 'titleFormat', value: args.titleFormat, size: 20, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-titleformat-help">').text('Help'))
                                .append($('<div id="sc-dropdown-titleFormat" class="sc-dropdown ">')
                                        .append($('<div class="sc-dropdown-panel">').css({'width': '300px'})
                                                .append($('<div>').html(
                                                        '<div><label ><b>Month</b></label><span style="width:auto;">M MM : 1..12;&nbsp; MMM : Jan;&nbsp; MMMM :January</span></div>'
                                                        + '<div><label><b>Day</b></label><span style="width:auto;">D DD : 1 01;&nbsp; Do : 1st;&nbsp; DDD DDDD : 1...365</span> </div>'
                                                        + '<div><label style="width:50px; display:inline-block"><b>Year</b></label><span style="width:auto;">YY : 15;&nbsp; YYYY : 2015</span> </div>')
                                                        .append($('<a href="#" id="ibs-sc-titleformat-update" >').text('close'))))
                                        .hide()))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('headerLeft'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-left', name: 'headerLeft', value: args.headerLeft, size: 30, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-left-help">').text('Help'))
                                .append($('<div id="sc-dropdown-left" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'}).sortable()
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prevYear" type="checkbox">'))
                                                        .append($('<span>').text('Prev Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prev" type="checkbox">'))
                                                        .append($('<span>').text('Prev')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="next" type="checkbox">'))
                                                        .append($('<span>').text('Next')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="nextYear" type="checkbox">'))
                                                        .append($('<span>').text('Next Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="today" type="checkbox">'))
                                                        .append($('<span>').text('Today')))
                                                .append($('<hr>'))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="month" type="checkbox">'))
                                                        .append($('<span>').text('Month')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (agenda)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (agenda)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="title" type="checkbox">'))
                                                        .append($('<span>').text('Title')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-left-update" >').text('Update')))).hide()
                                        )
                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('headerCenter'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-center', name: 'headerCenter', value: args.headerCenter, size: 30, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-center-help">').text('Help'))
                                .append($('<div id="sc-dropdown-center" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'}).sortable()
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="title" type="checkbox">'))
                                                        .append($('<span>').text('Title')))
                                                .append($('<hr>'))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prevYear" type="checkbox">'))
                                                        .append($('<span>').text('Prev Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prev" type="checkbox">'))
                                                        .append($('<span>').text('Prev')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="next" type="checkbox">'))
                                                        .append($('<span>').text('Next')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="nextYear" type="checkbox">'))
                                                        .append($('<span>').text('Next Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="today" type="checkbox">'))
                                                        .append($('<span>').text('Today')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="month" type="checkbox">'))
                                                        .append($('<span>').text('Month')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (agenda)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (agenda)')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-center-update" >').text('Update')))).hide())


                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('headerRight'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({id: 'ibs-sc-right', name: 'headerRight', value: args.headerRight, size: 30, type: 'text'}))
                                .append($('<a href="#" id="ibs-sc-right-help" >').text('Help'))
                                .append($('<div id="sc-dropdown-right" class="sc-dropdown sc-dropdown-tip">')
                                        .append($('<ul class="sc-dropdown-panel">').css({'min-width': '200px'}).sortable()
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="month" type="checkbox">'))
                                                        .append($('<span>').text('Month')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="basicDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (basic)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaWeek" type="checkbox">'))
                                                        .append($('<span>').text('Week (agenda)')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="agendaDay" type="checkbox">'))
                                                        .append($('<span>').text('Day (agenda)')))
                                                .append($('<hr>'))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prevYear" type="checkbox">'))
                                                        .append($('<span>').text('Prev Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="prev" type="checkbox">'))
                                                        .append($('<span>').text('Prev')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="next" type="checkbox">'))
                                                        .append($('<span>').text('Next')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="nextYear" type="checkbox">'))
                                                        .append($('<span>').text('Next Year')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="today" type="checkbox">'))
                                                        .append($('<span>').text('Today')))
                                                .append($('<li>')
                                                        .append($('<input class="sc-header-button-item" value="title" type="checkbox">'))
                                                        .append($('<span>').text('Title')))
                                                .append($('<li>')
                                                        .append($('<a href="#" id="ibs-sc-right-update" >').text('Update')))).hide()

                                        )
                                )
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('firstDay'))
                                .append($('<select name="firstDay">').addClass('shortcode-option')
                                        .append($('<option value="0" >Sunday</option>'))
                                        .append($('<option value="1" >Monday</option>'))
                                        .append($('<option value="2" >Tuesday</option>'))
                                        .append($('<option value="3" >Wednesday</option>'))
                                        .append($('<option value="4" >Thursday</option>'))
                                        .append($('<option value="5" >Friday</option>'))
                                        .append($('<option value="6" >Saturday</option>'))))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('defaultView')).append($('<select name="defaultView">').addClass('shortcode-option')
                                .append($('<option value="month" >month</option>'))
                                .append($('<option value="basicWeek" >basicWeek</option>'))
                                .append($('<option value="agendaWeek" >agendaWeek</option>'))
                                .append($('<option value="basicDay">basicDay</option>'))
                                .append($('<option value="agendaDay" >agendayDay</option>')))
                                .append($('<label>').text('defaultDate'))
                                .append($('<input>').addClass('shortcode-option')
                                        .attr({name: 'defaultDate', value: args.defaultDate, size: 8, type: 'text'}).datepicker({dateFormat: 'yy-mm-dd'})))
                        .append($('<div>').addClass('ibs-shortcode-div')
                                .append($('<label>').text('shortcode')
                                        .append($('<textarea id="shortcode-result" style="width:400px; height:75px;">').val('[ibs-calendar]'))))
                        .append($('<a href="#" id="test-shortcode">').text('Update'))
                        );
        $('[name=event_list]').find('[value=' + args.event_list + ']').prop('selected', true);
        $('[name=align').find('[value=' + args.align + ']').prop('selected', true);
        $('[name=eventLimitClick').find('[value=' + args.eventLimitClick + ']').prop('selected', true);
        $('[name=firstDay').find('[value=' + args.firstDay + ']').prop('selected', true);
        $('[name=defaultView').find('[value=' + args.defaultView + ']').prop('selected', true);
        $('#shortcode-result').val('[ibs-calendar]');
        for (var id in args.feeds) {
            var feed = args.feeds[id];
            $('#available-feeds')
                    .append($('<div>')
                            .append($('<label>').text(id))
                            .append($('<input>').addClass('shortcode-option').attr({name: 'feed', value: id, type: 'checkbox'}).prop('checked', feed.enabled))
                            .append($('<label>').text(feed.name))
                            );
        }
        $.each($.fullCalendar.langs, function (langCode) {
            $('#ibs-sc-lang').append(
                    $('<option/>')
                    .attr('value', langCode)
                    .text(langCode)
                    );
        });
        $('[name=lang]').find('[value=' + args.lang + ']').prop('selected', true);
        function closeHelp() {
            $('.sc-dropdown').hide();
            $('a').each(function (index, item) {
                if ($(item).text() === 'Close') {
                    $(item).text('Help');
                }
            });
        }
        function position(panel) {
            var w = $('#sc-topbar').width();
            var p = $(panel).width();
            var l = $('#sc-topbar').position().left;
            var t = $('#sc-topbar').position().top;
            l = l + w - p - 10;
            $(panel).css({left: l, top: t});
        }
        $('.sc-dns-item').on('change', '', {}, function () {
            $(this).addClass('changed');
        });
        $('#ibs-sc-dns-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-dns').is(':visible')) {
                $('#sc-dropdown-dns').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-dns').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-dns').show();
            }
        });
        $('#ibs-sc-dns-update').on('click', '', {}, function (event) {
            event.preventDefault();
            $('#ibs-sc-dns-help').text('Help');
            if ($('.sc-dns-item.changed').length) {
                var result = [];
                $('#sc-dropdown-dns').find('input').each(function (index, item) {
                    result.push($(item).val());
                });
                if (result.length) {
                    $('#ibs-sc-dns').val(result.toString());
                    $('#ibs-sc-dns').trigger('change');
                }
            }
            $('#ibs-sc-dns-help').trigger('click');
        });
        $('.sc-limit-item').on('change', '', {}, function (event) {
            event.preventDefault();
            switch ($(this).val()) {
                case 'true' :
                case 'false' :
                    $('#sc-event-limit-number').prop('disabled', true);
                    break;
                case 'number' :
                    $('#sc-event-limit-number').prop('disabled', false);
                    $('#sc-event-limit-number').focus();
            }
        });
        $('#ibs-sc-limit-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-limit').is(':visible')) {
                $('#sc-dropdown-limit').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-event-limit').find('input').prop('checked', false);
                $('#sc-event-limit-number').prop('disabled', true);
                $('#sc-event-limit-number').val('');
                $('#sc-dropdown-limit').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-limit').show();
            }
        });
        $('#ibs-sc-limit-update').on('click', '', {}, function (event) {
            $('#sc-dropdown-limit').find('input').each(function (index, item) {
                if ($(item).attr('type') === 'radio' && $(item).is(':checked')) {
                    switch ($(this).val()) {
                        case 'true' :
                            $('#ibs-sc-limit').val('yes');
                            break;
                        case 'false' :
                            $('#ibs-sc-limit').val('no');
                            break;
                        case 'number' :
                            var v = $('#sc-event-limit-number').val();
                            $('#ibs-sc-limit').val(v);
                            break;
                    }
                }
            });
            $('#sc-event-limit-number').prop('disabled', true);
            $('#sc-event-limit-number').val('');
            $('#ibs-sc-limit').trigger('change');
            $('#ibs-sc-limit-help').trigger('click');
        });
        $('.sc-header-button-item').on('change', '', {}, function (event) {
            $(this).addClass('changed');
        });
        $('#ibs-sc-left-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-left').is(':visible')) {
                $('#sc-dropdown-left').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-left').find('input').prop('checked', false);
                $('#sc-dropdown-left').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-left').show();
            }
        });
        $('#ibs-sc-left-update').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-left').find('.sc-header-button-item.changed').length) {
                var result = [];
                $('#sc-dropdown-left').find('input').each(function (index, item) {
                    if ($(item).is(':checked')) {
                        result.push($(item).val());
                    }
                });
                $('#ibs-sc-left').val(result.toString());
                $('#ibs-sc-left').trigger('change');
            }
            $('#ibs-sc-left-help').trigger('click');

        });
        $('#ibs-sc-center-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-center').is(':visible')) {
                $('#sc-dropdown-center').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-center').find('input').prop('checked', false);
                $('#sc-dropdown-center').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-center').show();
            }
        });
        $('#ibs-sc-center-update').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-center').find('.sc-header-button-item.changed').length) {
                var result = [];
                $('#sc-dropdown-center').find('input').each(function (index, item) {
                    if ($(item).is(':checked')) {
                        result.push($(item).val());
                    }
                });
                $('#ibs-sc-center').val(result.toString());
                $('#ibs-sc-center').trigger('change');
            }
            $('#ibs-sc-center-help').trigger('click');

        });
        $('#ibs-sc-right-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-right').is(':visible')) {
                $('#sc-dropdown-right').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-right').find('input').prop('checked', false);
                $('#sc-dropdown-right').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-right').show();
            }
        });
        $('#ibs-sc-right-update').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-right').find('.sc-header-button-item.changed').length) {
                var result = [];
                $('#sc-dropdown-right').find('input').each(function (index, item) {
                    if ($(item).is(':checked')) {
                        result.push($(item).val());
                    }
                });
                $('#ibs-sc-right').val(result.toString());
                $('#ibs-sc-right').trigger('change');
            }
            $('#ibs-sc-right-help').trigger('click');

        });
        $('#ibs-sc-hiddendays-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-hiddendays').is(':visible')) {
                $('#sc-dropdown-hiddendays').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-hiddendays').find('input').prop('checked', false);
                $('#sc-dropdown-hiddendays').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-hiddendays').show();
            }
        });
        $('#ibs-sc-hiddendays-update').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-hiddendays').find('.sc-header-button-item.changed').length) {
                var result = [];
                $('#sc-dropdown-hiddendays').find('input').each(function (index, item) {
                    if ($(item).is(':checked')) {
                        result.push($(item).val());
                    }
                });
                $('#ibs-sc-hiddendays').val(result.toString());
                $('#ibs-sc-hiddendays').trigger('change');
            }
            $('#ibs-sc-hiddendays-help').trigger('click');

        });
        $('.sc-height-item').on('change', '', {}, function (event) {
            event.preventDefault();
            switch ($(this).val()) {
                case 'null' :
                case 'false' :
                    $('#sc-height').prop('disabled', true);
                    break;
                case 'number' :
                    $('#sc-height').prop('disabled', false);
                    $('#sc-height').focus();
            }
        });
        $('#ibs-sc-height-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-height').is(':visible')) {
                $('#sc-dropdown-height').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-event-height').find('input').prop('checked', false);
                $('#sc-height').prop('disabled', true);
                $('#sc-height').val('');
                $('#sc-dropdown-height').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-height').show();
            }
        });
        $('#ibs-sc-height-update').on('click', '', {}, function (event) {
            event.preventDefault();
            $('#sc-dropdown-height').find('input').each(function (index, item) {
                if ($(item).attr('type') === 'radio' && $(item).is(':checked')) {
                    switch ($(this).val()) {
                        case 'null' :
                            $('#ibs-sc-height').val('null');
                            break;
                        case 'auto' :
                            $('#ibs-sc-height').val('auto');
                            break;
                        case 'number' :
                            var v = $('#sc-height').val();
                            $('#ibs-sc-height').val(v);
                            break;
                    }
                }
            });
            $('#sc-event-height-number').prop('disabled', true);
            $('#sc-event-height-number').val('');
            $('#ibs-sc-height').trigger('change');
            $('#ibs-sc-height-help').trigger('click');
        });
        $('#ibs-sc-timeformat-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-timeFormat').is(':visible')) {
                $('#sc-dropdown-timeFormat').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-timeFormat').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-timeFormat').show();
            }

        });
        $('#ibs-sc-timeformat-update').on('click', '', {}, function (event) {
            event.preventDefault();
            $('#ibs-sc-timeformat-help').trigger('click');
        });
        $('#ibs-sc-titleformat-help').on('click', '', {}, function (event) {
            event.preventDefault();
            if ($('#sc-dropdown-titleFormat').is(':visible')) {
                $('#sc-dropdown-titleFormat').hide();
                $(this).text('Help');
            } else {
                closeHelp();
                $(this).text('Close');
                $('#sc-dropdown-titleFormat').css({left: $(this).position().left, top: $(this).position().top + $(this).height()});
                $('#sc-dropdown-titleFormat').show();
            }

        });
        $('#ibs-sc-titleformat-update').on('click', '', {}, function (event) {
            event.preventDefault();
            $('#ibs-sc-titleformat-help').trigger('click')
        });
        var atts = [];
        $('.shortcode-option').on('change', '', {}, function (event) {
            $(this).addClass('changed')
            atts = [];
            var sc = '[ibs-calendar ';
            $('.shortcode-option.changed').each(function (index, item) {
                if ($(item).attr('type') === 'checkbox') {
                    if ($(item).is(':checked')) {
                        if ($(item).attr('name') === 'feed') {
                            args.feeds[$(item).val()].enabled = true;
                        } else {
                            sc += ' ' + $(item).attr('name') + '=' + '"true"';
                            atts[$(item).attr('name')] = true;
                        }
                    } else {
                        if ($(item).attr('name') === 'feed') {
                            args.feeds[$(item).val()].enabled = false;
                        } else {
                            sc += ' ' + $(item).attr('name') + '=' + '"false"';
                            atts[$(item).attr('name')] = false;
                        }
                    }
                }
                if ($(item).attr('type') === 'text' || $(item).attr('type') === 'number') {
                    if ($(item).val() !== '' && $(item).val() !== 'null') {
                        sc += ' ' + $(item).attr('name') + '="' + $(item).val() + '"';
                        atts[$(item).attr('name')] = $(item).val();
                    } else {
                        if ($(item).attr('name') == 'height') {
                            sc += ' ' + $(item).attr('name') + '="null"';
                        }
                        atts[$(item).attr('name')] = null;
                    }
                }
                if ($(item).is('select')) {
                    if ($(item).val() !== '') {
                        sc += ' ' + $(item).attr('name') + '="' + $(item).val() + '"';
                        atts[$(item).attr('name')] = $(item).val();
                    } else {
                        atts[$(item).attr('name')] = null;
                    }
                }
            });
            var af = [];
            for (var id in args.feeds) {
                if (args.feeds[id].enabled) {
                    af.push(id.replace('feed_', ''));
                }
            }
            if (af.length) {
                sc += ' feeds="' + af.toString() + '" ';
                atts['feeds'] = af.toString();
            } else {
                sc += ' feeds=""';
            }
            sc += ']';
            $('#shortcode-result').val(sc);
        });
        $('#test-shortcode').on('click', '', {}, function (event) {
            event.preventDefault();
            shortcode.test(args, atts);
        })

        this.testCalendar = null;
        this.destroy = function () {
            if (this.testCalendar) {
                this.testCalendar.calendar.fullCalendar('destroy');
                this.testCalendar = null;
                $('#ibs-calendar-2').remove();
            }
        }
        this.test = function (options, atts) {
            this.destroy()
            var args = options;
            for (var key in atts) {
                if (typeof args[key] !== 'undefined') {
                    if (key === 'feeds') {
                        var keep = atts['feeds'].split(',');
                        for (var i = 1; args.feedCount >= i; i++) {
                            var index = i.toString();
                            if (keep.indexOf(index) == -1) {
                                args.feeds['feed_' + index].enabled = false;
                            }
                        }
                    } else {
                        args[key] = atts[key];
                    }
                }
            }
            if (typeof atts['repeats'] !== 'undefined') {
                args.list_repeat = atts['repeats'].toLowerCase() == 'yes' ? true : false;
            }
            if (typeof atts['past'] !== 'undefined') {
                if (typeof atts['past'] === 'string') {
                    args.list_past = atts['past'].toLowerCase() == 'yes' ? true : false;
                }
            }
            if (typeof atts['max'] !== 'undefined') {
                args.list_max = parseInt(atts['max']);
            }
            if (typeof args.hiddenDays !== 'undefined' && args.hiddenDays !== null) {
                if (args.hiddenDays == '') {
                    args.hiddenDays = null;
                } else {
                    args.hiddenDays = args.hiddenDays.split(',');
                    for (var i = 0; i < args.hiddenDays.length; i++) {
                        args.hiddenDays[i] = parseInt(args.hiddenDays[i])
                    }
                }
            }
            if (typeof args.dayNamesShort !== 'undefined' && args.dayNamesShort !== null) {
                if (args.dayNamesShort == '') {
                    args.dayNamesShort = null;
                } else {
                    args.dayNamesShort = args.dayNamesShort.split(',');
                }
            }
            if (typeof args['firstDay'] !== 'undefined') {
                if (args['firstDay']) {
                    args.firstDay = parseInt(args.firstDay);
                } else {
                    args.firstDay = 0;
                }
            }
            if (typeof args['height'] !== 'undefined' && args['height'] !== 'null' && args['height'] !== 'auto') {
                if (args['height']) {
                    args.height = parseInt(args.height);
                }
            }
            if (typeof args['aspectRatio'] !== 'undefined' && args['aspectRatio'] !== 'null') {
                args.aspectRatio = parseFloat(args.aspectRatio);
            }
            if (typeof args['eventLimit'] !== 'undefined') {
                if (typeof args.eventLimit == 'string') {
                    switch (args.eventLimit) {
                        case 'true':
                        case 'yes' :
                            args.eventLimit = true;
                            break;
                        case 'false':
                        case 'no' :
                            args.eventLimit = false;
                            break;
                        default :
                            args.eventLimit = parseInt(args.eventLimit);
                    }
                } else {

                }

            }
            function fixbool(args) {
                var key;
                for (key in args) {
                    if (typeof args[key] === 'object') {
                        return fixbool(args[key]);
                    }
                    if (key === 'eventLimit') {
                        return;
                    }
                    if (typeof args[key] === 'string') {
                        switch (args[key].toLowerCase()) {
                            case "null" :
                                args[key] = null;
                                break;
                            case "true" :
                            case "yes" :
                                args[key] = true;
                                break;
                            case "false" :
                            case "no" :
                                args[key] = false;
                                break;
                            default :
                        }
                    }
                }
            }
            fixbool(args);
            args.id = 2;
            if (args.width == '100%') {
                args.width = ($('#shortcode-options').parent().width() - $('#sc-topbar').width() - 50) + 'px';
            }
            $('#shortcode-options').parent()
                    .append($('<div id="ibs-calendar-2" class="' + args.align + '" style="margin-top:20px; float:left; width:' + args.width + '";>')
                            .append($('<form id="fullcalendar-2" >'))
                            .append($('<div id="ibs-loading-2" >'))
                            .append($('<div>').attr('id', "legend-list-2").addClass('ibs-legend'))
                            .append($('<div id="list-display-div-2">')
                                    .append($('<input>').attr({'id': 'list-display-2', 'type': 'checkbox'}).css("margin", "10px"))
                                    .append($('<span>').text(" Event List"))
                                    .append($('<div>').attr('id', "event-list-2")
                                            .append($('<table rules="all">').attr('id', 'event-table-2')
                                                    ))
                                    ));
            this.testCalendar = new CalendarObj(jQuery, args, 'shortcode');
        }
    }
});
 