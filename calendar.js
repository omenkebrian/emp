$( document ).ready(function() {
    
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '1980-10-11',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '1980-10-11'
				},
				{
					title: 'Long Event',
					start: '1980-10-11',
					end: '1980-10-11'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2015-12-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2020-101-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2015-12-11',
					end: '2020-12-13'
				},
				{
					title: 'Meeting',
					start: '2015-12-12T10:30:00',
					end: '2015-12-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2020-12-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2020-12-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2020-12-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2020-12-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2020-12-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2020-01-25'
				}
			]
		});

});