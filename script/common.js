/*
 * スムーズスクロール
 **/
$( function() {
	$(".scroll").click(function(event) {
		event.preventDefault();

		var url = this.href;
		var parts = url.split("#");
		var target = parts[1];
		var target_offset = $("#"+target).offset();

		// トップ位置をとりあえず 130px オフセット
		var target_top = target_offset.top - 130;

		$('html, body').animate({scrollTop:target_top}, "slow");
	});
});

/*
 * ウェーブエフェクト
 **/
$( function() {
	// run the currently selected effect
	function runEffect() {

		// Most effect types need no options passed by default
		var options = {};

		// Run the effect
		$( "#effect" ).toggle( "blind", options, 400 );
	};

	// Set effect from select menu value
	$( "#menu-help" ).on( "click", function() {
		runEffect();
	});
});

/*
 * モーダルウィンドウ
 **/
$( function() {
	$(document).ready(function() {
		// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
		$('.modal-trigger').leanModal( {
			dismissible: true,
			opacity: 0.5,
			in_duration: 300,
			out_duration: 200,
			starting_top: '4%',
			ending_top: '10%'
		});
	});
});

/*
 * Datepicker
 **/
/*
$( function() {
	$.fn.datepicker.setDefaults({
		// Pick the initial date automatically when initialized
		language: 'ja-JP',
		template: (
            '<div class="datepicker-container">' +
              '<div class="datepicker-panel" data-view="years picker">' +
                '<div class="datepicker-display">' +
                  '<div class="datepicker-display-year">平成26年（2014年）</div>' +
                '</div>' +
                '<ul>' +
                  '<li data-view="years prev">&lsaquo;</li>' +
                  '<li data-view="years current"></li>' +
                  '<li data-view="years next">&rsaquo;</li>' +
                '</ul>' +
                '<ul data-view="years"></ul>' +
              '</div>' +
              '<div class="datepicker-panel" data-view="months picker">' +
                '<div class="datepicker-display">' +
                  '<div class="datepicker-display-year">平成26年（2014年）</div>' +
                  '<div class="datepicker-display-day">6月</div>' +
                '</div>' +
                '<ul>' +
                  '<li data-view="year prev">&lsaquo;</li>' +
                  '<li data-view="year current"></li>' +
                  '<li data-view="year next">&rsaquo;</li>' +
                '</ul>' +
                '<ul data-view="months"></ul>' +
              '</div>' +
              '<div class="datepicker-panel" data-view="days picker">' +
                '<div class="datepicker-display">' +
                  '<div class="datepicker-display-year">平成26年（2014年）</div>' +
                  '<div class="datepicker-display-day">6月5日（木）</div>' +
                '</div>' +
                '<ul>' +
                  '<li data-view="month prev">&lsaquo;</li>' +
                  '<li data-view="month current"></li>' +
                  '<li data-view="month next">&rsaquo;</li>' +
                '</ul>' +
                '<ul data-view="week"></ul>' +
                '<ul data-view="days"></ul>' +
              '</div>' +
            '</div>'
		)
	});

	$('[data-toggle="datepicker"]').datepicker({
		autoPick: true,
		trigger: '.datepicker-trigger',
		date: new Date(2014, 6 - 1, 5),
		startDate: '2000/01/01',
		endDate: '2016/12/31',
		startView: 0
	});

});
*/


