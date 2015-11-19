$(function(){
    var includes = $('.include');

      console.log(includes);
    jQuery.each(includes, function(){
      var file = 'views/' + $(this).data('include') + '.html';
      console.log(file);
      $(this).load(file);
    });
  });


$('.box').click(function() {
  var src = $(this).attr('src');
  $('.box').removeClass('img-border');
  //$('.box').addClass('box');
  src = src.replace('%20thumb', '');
  $('.site').attr('src', src);
  //alert($(this).attr('title'));
  //$(this).removeClass('box');
  $(this).addClass('img-border');
  if ($(this).attr('title') == "Voting App") {
    $('#summary').html('<a href="http://perrot-votingapp.herokuapp.com/" style="font-weight:bold">Voting App</a><br/>An authenticated user can create/delete the vote. And can share the vote to others.');
    $('#btn-link').attr("onclick", "window.location.href='http://perrot-votingapp.herokuapp.com/'");
    $('#btn-git').attr("onclick", "window.location.href='https://github.com/perrot/votingapp.git'");
  } else if ($(this).attr('title') == "Stock Market Graph") {
    $('#summary').html('<a href="https://perrot-stockmarket.herokuapp.com/" style="font-weight:bold">' + $(this).attr('title') + '</a><br/>The user can view in real time after add or remove the stock. An authenticated user can memory the add or remove stocks. ');
    $('#btn-link').attr("onclick", "window.location.href='https://perrot-stockmarket.herokuapp.com/'");
    $('#btn-git').attr("onclick", "window.location.href='https://github.com/perrot/stock-market-chart-app.git'");
  } else if ($(this).attr('title') == "Nightlife App") {
    $('#summary').html('<a href="https://perrot-nightlife.herokuapp.com/" style="font-weight:bold">' + $(this).attr('title') + '</a><br/>Input the city name to search all bars of the city. An authenticated user can add or remove the going bars. After login, you don\'t need to search again. Use Yelp API.');
    $('#btn-link').attr("onclick", "window.location.href='https://perrot-nightlife.herokuapp.com/'");
    $('#btn-git').attr("onclick", "window.location.href='https://github.com/perrot/nightlife-app.git'");
  } else if ($(this).attr('title') == "Pinterest Clone App") {
    $('#summary').html('<a href="https://perrot-winterest.herokuapp.com/" style="font-weight:bold">' + $(this).attr('title') + '</a><br/>Like Pinterest grid style. An authenticated user can link or remove the images. A invalid(dead link) image can replace with a default image. Can use Twitter account to login.');
    $('#btn-link').attr("onclick", "window.location.href='https://perrot-winterest.herokuapp.com/'");
    $('#btn-git').attr("onclick", "window.location.href='https://github.com/perrot/winterest-app.git'");
  } else if ($(this).attr('title') == "Book Trade App") {
    $('#summary').html('<a href="https://perrot-bookjump.herokuapp.com/" style="font-weight:bold">' + $(this).attr('title') + '</a><br/>A user can view all books added by every users, and can add or remove the books. Request a book trade, the others can accept this trade.');
    $('#btn-link').attr("onclick", "window.location.href='https://perrot-bookjump.herokuapp.com/'");
    $('#btn-git').attr("onclick", "window.location.href='https://github.com/perrot/bookjump-app.git'");
  }
  //$(this).css('border',"2px solid #F6007F");
})
var sourceSwap = function() {
  var $this = $(this);
  var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
}

$(function() {
  $('img.box').hover(sourceSwap, sourceSwap);
});
$(function() {
  $("#menu").menu();
});
