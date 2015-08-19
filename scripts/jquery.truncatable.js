/**
 * truncatable - jQuery lightweight text truncation plugin
 *
 * Adapted from Philip Beel's code http://theodin.co.uk/blog/development/truncatable-jquery-plugin.html
 *
 * Copyright (c) 2010 Nicolas Perriault (http://prendreuncafe.com/blog/)
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */
(function($) {
  $.fn.truncatable = function(o) {
    var defaults = {
      limit:    100,
      more:     '...',
      less:     false,
      hideText: '[read less]'
    };
    
    var options = $.extend(defaults, o);
    
    return this.each(function(num) {
      var htmlContent = $(this).html().trim();
      var stringLength = htmlContent.length;
      
      if (stringLength <= defaults.limit) {
        return;
      }
      
      var splitText = htmlContent.substr(defaults.limit);
      var splitPoint = splitText.substr(0, 1);
      var whiteSpace = new RegExp(/^\s+$/);
      
      for (var newLimit = defaults.limit; newLimit < stringLength; newLimit++) {
        var newSplitText = htmlContent.substr(0, newLimit);
        var newSplitPoint = newSplitText.slice(-1);
        
        if (!whiteSpace.test(newSplitPoint)) {
          continue;
        }
        
        var newHiddenText = htmlContent.substr(newLimit);
        var hiddenText = '<span class="hiddenText_' + num + '" style="display:none">' + newHiddenText + '</span>';
        var setNewLimit = (newLimit - 1);
        var trunkLink = $('<a>').attr('class', 'more_' + num + '');
        
        $(this).html(htmlContent.substr(0, setNewLimit) + '<a class="more_' + num + '" href="#">' + defaults.more + '</a> ' + hiddenText);
        $('.hide_' + num).hide();
        $('a.more_' + num).on('click', function() {
          $('span.hiddenText_' + num).fadeIn("slow");
          $('a.more_' + num).hide();
		  $('.hide_' + num).show();
          if (defaults.less == true) {
            $('span.hiddenText_' + num + ' > a.hide_' + num).remove();
            //$('span.hiddenText_' + num).append('<a class="hide_' + num + '" href="#" title="' + defaults.hideText + '">' + defaults.hideText + '</a>');
			
            $('a.hide_' + num).on('click', function() {
              $('.hiddenText_' + num).hide();
              $('.more_' + num).show();
              $('.hide_' + num).hide();
              return false;
            });
          }
          return false;
        });
        
        newLimit = stringLength;
      }
    });
  };
})(jQuery);