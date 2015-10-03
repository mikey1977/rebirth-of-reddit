"use strict";

//List items
(function() {
  $.ajax({
    url : "https://www.reddit.com/r/The_Donald.json",
    method : "GET",
    success : function(data) {
      $('section').append('<ul>');
      for (var i = 0; i < data.data.children.length; i++) {
        var listItems = $('<li>', {
          html : data.data.children[i].data.title
        });
        $('section > ul').append(listItems);
      };
      $('section > ul > li').css({
        border: "1px solid black",
        height: "40px",
        backgroundColor: "green"
      });
    },
    error : function(err) {
      console.log(err);
    }
  })
})();

//