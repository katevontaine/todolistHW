$(document).ready(function () {
   page.init();
});

var page = {
    deleteArticle: function (idx) {
      todoList.splice(idx,1);
      $('.todocontainer').html('');
      page.loadTemplate(todoList);
    },


  init: function() {
    page.events();
    page.loadTemplate();
  },

  events: function() {

    // var dblClick = document.getElementByClass('ddd').addEventListener('dblclick', function(){
    //   $('input').appendto('.ddd');
    //   });

    $('form').on('submit', function (event) {
         event.preventDefault();
         var newList = {
           content: $('input[name="todoname"]').val(),
         };

         todoList.push(newList);
         newList.id = todoId;
         var todoId = todoList.indexOf(newList);
         page.loadTemplate($('.todocontainer'), newList, $('#todoTmpl').html());
         $('.todocontainer todoname').val('');
        $('.todocontainer textarea').val('');
       });



       $('footer > a').on('click', function(event){
         event.preventDefault();
         var todoId = todoList.length
          console.log(todoId);
          // $('theCounter').text(todoId);
          $("div.theCounter").text(todoId).css( "color", "white" );
        });
                // });
          $('footer ul li a').on('click', function(event){
            event.preventDefault();
            var clickedSection = "." + $(this).attr('rel');
           $('.todocontainer').addClass('clickedSection');

       });

      //  $('.save').on('click', function(event){
      //    event.preventDefault();
      //    var clickedSection = "." + $(this).attr('rel');
      //    $('article').addClass('.active');
      //  });

       $('.imDone').on('click', function(event){
         event.preventDefault();
        //  var clickedSection = "." + $(this).attr('rel');
        //  $('.save').addClass('.complete');
         $('.save').siblings('p').addClass('hideElement');
       });

      //  $('footer nav li a').on('click', function(event){
      //    event.preventDefault();
      //    var clickedSection = "." + $(this).attr('rel');
      //    $('.todocontainer').addClass('clickedSection');
      //    $('.todocontainer').siblings('article').addClass('hideElement');
      //    console.log(clickedSection);
      //     });

          $('.all').on('click', function(event){
            event.preventDefault();
            var clickedSection = "." + $(this).attr();
            $('clickedSection').toggleClass('.all');
            $('clickedSection').siblings("article").addClass('hideElement');
          });

          $('.active').on('click', function(event){
            event.preventDefault();
            var clickedSection = "." + $(this).attr();
            $('clickedSection').toggleClass('.active');
            $('clickedSection').siblings("article").addClass('hideElement');
          });

          $('.complete').on('click', function(event){
            event.preventDefault();
            var clickedSection = "." + $(this).attr();
            $('clickedSection').toggleClass('.complete');
            $('clickedSection').siblings("article").addClass('hideElement');
          });

          $(".clearall").on('click', function(event){
            event.preventDefault();
           $('.todocontainer').empty();
                 });

           $(".ddd").dblclick(function(){
               alert("The paragraph was double-clicked");
           });

          //  $(".ddd").on('dblclick', function(event){
          //    event.preventDefault();
          //   $('.ddd').appendto();
          //         });

          // (".ddd").on(function OnDblClickSpan () {
          //         alert ("You have double-clicked on the text!");
          //     });

            // ('.ddd').onbdlclick (function(){
            //   event.preventDefault();
            //   $('.ddd').appendto();
            // });

          // }); //end of button

      //  })
    },
    //  end event bracket
    loadTemplate: function ($el, data, tmpl) {
      var template = _.template(tmpl);
      var html = template(data);
      $el.append(html);
    },
    loadArticles: function (arr) {
      _.each(arr, function (currEl, idx, arr) {
        currEl.id = idx;
        page.loadTemplate($('.todocontainer'), currEl, $('#todoTmpl').html());
      });
    },
    alertMe: function (msg) {
    alert(msg);
    page.logMe(msg);
  },
  logMe: function (msg) {
    console.log(msg);
  }

} // end todoList bracket
