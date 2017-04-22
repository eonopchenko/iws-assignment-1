  var i = 0;
  var path = new Array();
  var descriptions = new Array();
  var descr = document.getElementById('description');

  path[0] = "./media/gallery-001.webp";
  path[1] = "./media/gallery-002.webp";
  path[2] = "./media/gallery-003.webp";
  path[3] = "./media/gallery-004.webp";
  path[4] = "./media/gallery-005.webp";
  path[5] = "./media/gallery-006.webp";
  path[6] = "./media/gallery-007.webp";
  path[7] = "./media/gallery-008.webp";
  path[8] = "./media/gallery-009.webp";
  path[9] = "./media/gallery-010.webp";
  path[10] = "./media/gallery-011.webp";
  path[11] = "./media/gallery-012.webp";
  path[12] = "./media/gallery-013.webp";
  path[13] = "./media/gallery-014.webp";
  path[14] = "./media/gallery-015.webp";

  descriptions[0] = "Looking out over Lake Wakatipu to the striking Remarkables standing tall in the distance";
  descriptions[1]  = "Just a 45 minute walk to the top of Queenstown Hill, you're welcomed to views like this over Lake Wakatipu";
  descriptions[2]  = "This little gem is hidden along the Road to Glenorchy. There's a stream that joins the lake and is a perfect spot for picnics!";
  descriptions[3]  = "Horse riding through fields of lupins in Glenorchy - just magical";
  descriptions[4]  = "Combine the ultimate thrill with a spot of sightseeing and throw yourself out of a plane over Queenstown";
  descriptions[5]  = "Head to the top of Bob's Peak for some of the best views in town - then take to the skies and go paragliding!";
  descriptions[6]  = "The enchanted moss-covered forest of Paradise";
  descriptions[7]  = "End your day by leaping off Coronet Peak in a hang glider! This is as close as it comes to feeling like a bird!";
  descriptions[8]  = "The sunburnt hills of Central Otago are best seen from the skies above - in a hot air balloon!";
  descriptions[9]  = "A typical New Zealand traffic jam. It's lucky the views are nothing short of breathtaking!";
  descriptions[10] = "Take a walk along the Frankton Track. It's about an hours walk into town, and the views are surreal!";
  descriptions[11] = "It's worth taking a scenic flight over Queenstown, the views of Lake Wakatipu from above really show just how surreal the blue water is...";
  descriptions[12] = "Take the Skyline Gondola up to the top of Bob's Peak for a Luging adventure!";
  descriptions[13] = "The world's greatest scenic flight - Queenstown to Milford Sound - absolutely breathtaking!";
  descriptions[14] = "Anyone that has flown into Queensotwn will understand how moving the experience can be. Rated one of the world's most scenic landings, the surrounding  landscapes will leave you awe-inspired";

  function swapImage()
  {
    document.slide.src = path[i];
    descr.innerHTML = descriptions[i];
    i = (i < path.length - 1) ? i + 1 : 0;
    setTimeout("swapImage()", 5000);
  }
  window.onload=swapImage;
