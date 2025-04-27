$(document).ready(function() {
    // Hover effect on thumbnails
    $('#thumbs img').hover(
      function() {
        $(this).css({
          'border': '2px solid darkgreen',
          'box-shadow': '2px 2px 6px rgba(0, 100, 0, 0.5)'
        });
      },
      function() {
        $(this).css({
          'border': '',
          'box-shadow': ''
        });
      }
    );
  
    // Click event on thumbnails to change large image
    $('#thumbs img').click(function() {
      var newSrc = $(this).attr('src'); // Get thumbnail src
      var newAlt = $(this).attr('alt'); // Get thumbnail alt text
      $('#lgPic').attr('src', newSrc);  // Update large image src
      $('#lgTitle').text(newAlt);       // Update caption
    });
  
    // Click event on large image to open it in a new window
    $('#lgPic').click(function() {
      var imgSrc = $(this).attr('src');
      window.open(imgSrc, '_blank');
    });
  });