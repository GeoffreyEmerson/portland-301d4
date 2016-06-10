// Sandbox for class05_markedjs_geoff
$(document).ready(function() {
  var $inputField = $('#textInput'); // Save the textarea element
  $inputField.on('input', render); // Attach a listener to the textarea

  // This function is the workhorse
  function render() {
    var newText = $inputField.val(); // Grab the text currently in the textarea
    var markUp = marked(newText); // Process the input through the 'marked' library
    $('#output').html(markUp); // Display the processed input in the output area
    // Look through the output area for segments of 'pre' text.
    $('#output').find('pre').each(function(unused,codeBlock){
      hljs.highlightBlock(codeBlock); // Run each segment through the highlighter.
    });
  };

  render(); // Runs once on load so that the demo code is interpreted.

  // Put a listener on the button for when a user clicks it
  $('#attachButton').on('click', function(event) {
    event.preventDefault(); // if a browser has a default action on buttons, stop it.
    $saveMe = $('#output').html(); // Grab the html from the 'temporary' output element.
    $('#attachCrapHere').append($saveMe); // Attach that html permenently to the bottom of the page.
  });
});
