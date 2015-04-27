$.widget( "custom.lollipicker", {
 
	_classPrefix: 'lollipicker-',

	options: {
		// Register methods to trigger 
		triggers:  {
			show: ['click'],
			hide: ['blur']
		}
	},

    _create: function() {
		this._initializeWidget();
		this._registerEvents();
        this.element
            .text( 'hey' );
    },
 
	_registerEvents: function() {
		// TODO implement
	},

	_initializeWidget: function () {
		var widget = $('<div>').addClass(this._classPrefix + 'container');

		//Initialize the clock

		// Hour picker
		var hourPicker = $('<div>');
		this._addClass(hourPicker, 'hour-picker');

		for (var i = 0; i < 12; i++) {
			var hour = $('<div>');
			this._addClass(hour, 'hour');
			hour.html(i + 1);
			widget.append(hour);
		}

		console.log(widget);
		this.element.html(widget);
	},

	_addClass: function (elem, cls) {
		elem.addClass(this._classPrefix + cls);
	},

    // Create a public method.
    value: function(value) {
		//TODO implement
    },
});