(function($) {
    $.extend({
        doGet: function(url, params) {
            document.location = url + '?' + $.param(params);
        },
        doPost: function(url, params) {
            var $form = $("<form method='POST'>").attr("action", url);
            $.each(params, function(name, value) {
                $("<input type='hidden'>")
                    .attr("name", name)
                    .attr("value", value)
                    .appendTo($form);
            });
            $form.appendTo("body");
            $form.submit();
        }
    });
})(jQuery);