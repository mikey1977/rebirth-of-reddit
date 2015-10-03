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

        var urlItems = ' <p><a href="'+ data.data.children[i].data.url + '"> ' + 'Click to Dread the Donald'  + '</a></p>'
        var authorItems = ' <p>"' + data.data.children[i].data.author + '"</p>'
        var imageItems = '<p><img src="' + data.data.children[i].data.thumbnail + '"></p> '
        // $('section > ul').append(listItems, imageItems);
        $(listItems).append(urlItems, authorItems, imageItems);
        $('section > ul').append(
          $(listItems)
            // $(imageItems).html()
            );
      };

      $('section > ul > li').css({
        textalign: "center",
        margin: "20px",
        padding: "20px",
        width: "600px",
        border: "1px solid black",
        height: "200px",
        backgroundColor: "green"
      });
    },
    error : function(err) {
      console.log(err);
    }
  })
})();

//