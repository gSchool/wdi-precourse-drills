$(document).ready(function(){

//clicking on ecosystem buttons toggles postcards
  $('.pc').hide();
  $(document).on('click', '#desert', function(){
    $('#bakeo').toggle();
  });
  $(document).on('click', '#city', function(){
    $('#la').toggle();
  });
  $(document).on('click', '#beach', function(){
    $('#sd').toggle();
  });
  $(document).on('click', '#mountains', function(){
    $('#boulder').toggle();
  });
  $(document).on('click', '#desert2', function(){
    $('#egypt').toggle();
  });
  $(document).on('click', '#city2', function(){
    $('#lyon').toggle();
  });
  $(document).on('click', '#beach2', function(){
    $('#piha').toggle();
  });
  $(document).on('click', '#mountains2', function(){
    $('#machu').toggle();
  });

//postcard hover shows description
  $('.places').hide();
  $('#bakeo').hover(function() {
    $('#bakeoExt').show();
  },function() {
    $('#bakeoExt').hide();
  });
  $('#bakeo').hover(function() {
    $('.asterisk').show();
  },function() {
    $('.asterisk').hide();
  });
  $('#la').hover(function() {
    $('#laExt').show();
  },function() {
    $('#laExt').hide();
  });
  $('#sd').hover(function() {
    $('#sdExt').show();
  },function() {
    $('#sdExt').hide();
  });
  $('#boulder').hover(function() {
    $('#boulderExt').show();
  },function() {
    $('#boulderExt').hide();
  });

//what would you say you do here
  $('#theBobs').hide();
  $(document).on('mouseenter mouseleave', '#yeahhhhh', function(){
    $('#theBobs').toggle();
  });

  //hobbies toggle photos
    $('.hobbies').hide();
    $('#cooking').hover(function() {
      $('#pi').show();
    },function() {
      $('#pi').hide();
    });
    $('#poker').hover(function() {
      $('#pokerz').show();
    },function() {
      $('#pokerz').hide();
    });
    $('#snow').hover(function() {
      $('#vapor').show();
    },function() {
      $('#vapor').hide();
    });
    $('#know').hover(function() {
      $('#monkeys').show();
    },function() {
      $('#monkeys').hide();
    });
    $('#sales').hover(function() {
      $('#4g').show();
    },function() {
      $('#4g').hide();
    });
    $('#moto').hover(function() {
      $('#carmen').show();
    },function() {
      $('#carmen').hide();
    });
    $('#photog').hover(function() {
      $('#bali').show();
    },function() {
      $('#bali').hide();
    });
    $('#poet').hover(function() {
      $('#poem').show();
    },function() {
      $('#poem').hide();
    });

//people i cook for toggle photos
  $('.cook').hide();
  $('#wife').hover(function() {
    $('#nucfam').show();
  },function() {
    $('#nucfam').hide();
  });
  $('#sis').hover(function() {
    $('#bourliers').show();
  },function() {
    $('#bourliers').hide();
  });
  $('#fam').hover(function() {
    $('#turkey').show();
  },function() {
    $('#turkey').hide();
  });
  $('#misfits').hover(function() {
    $('#friends').show();
  },function() {
    $('#friends').hide();
  });
  $('#boulderFriends').hover(function() {
    $('#emptySet').show();
  },function() {
    $('#emptySet').hide();
  });
});
