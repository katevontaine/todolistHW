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
       });



       $('footer ul li > a').on('click', function(event){
         event.preventDefault();
         var todoId = todoList.length
          console.log(todoId);

          // $(todoId).html('theCounter');
        });
                // });
          $('footer ul li a').on('click', function(event){
            event.preventDefault();
            var clickedSection = "." + $(this).attr('rel');
           $('.todocontainer').addClass('clickedSection');
       });

       $('button .done').on('click', function(event){
         event.preventDefault();
         var clickedSection = "." + $(this).attr('rel');
         $(clickedSection).addClass('.remove');
       });
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
