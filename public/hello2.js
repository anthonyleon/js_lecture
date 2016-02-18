// function a_function() {
//   console.log('b');
// }
// function onChangeHandler(input) {
//   console.log('the input changed')
//   console.dir(input.value);
//   input.value = "thanks";
// }


// input = Object.create(input);
// input.type = "type"
// input.onChange = onChangeHandler;
//
//
// body = document.getElementByTag('body');
// body.addChild(input);

function ready() {
  $('a').click(function(evt) {
    // console.log('link clicked')
    evt.preventDefault();

    console.log("start get");
    $.get('https:/api.github.com/users/eddroid', function () {
      console.log(arguments);
      console.log('finished get');
    });
    console.log("after get");

    // console.dir(response);
    // var link = $(evt.target);
    //
    // link.slideUp(3000, function(e) {
    //
    //   $(link).replaceWith("OMG!!");
    });
  };



  //
  // $('input').change(function(e) {
  //   console.log('change event!');
  //   var input = e.target;
  //
  //   var value = input.value;
  //   console.log(value.length);
  //
  //   if (value.length === 0) {
  //     $(input).addClass('red')
  //   }
    // console.dir(input.value);

    // e.target.value = "Thanks!";
    // $(e.target).val("Thanks!");

    // console.dir(input);
    // console.dir($(input).replaceWith("<strong>Thanks!</strong>"));




$(document).on('ready page:load', ready);
