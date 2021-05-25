$(document).ready(function () {
  var weapons=[
    {
    "name":"44_pistol",
    "damage":48,
    "fire_rate":6,
    "range":119,
    "accuracy":66,
    "weight":4.2,
    "value":99,
    "ammo":12
  },
  {
    "name":"10mm_pistol",
    "damage":18,
    "fire_rate":46,
    "range":119,
    "accuracy":61,
    "weight":4.2,
    "value":53,
    "ammo":20
  },
  {
    "name":"assault_rifle",
    "damage":30,
    "fire_rate":40,
    "range":119,
    "accuracy":72,
    "weight":13.1,
    "value":144,
    "ammo":120
  }
  ];

  $('.item-list a').on('click',function(e){
    $('.item-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  $('.item-list a').on('mouseenter',function(e){
    var current_item = $(e.currentTarget).attr('class');

    for(item in weapons){
      if(weapons[item].name == current_item){
        var container = $('.item-staats');
        container.find('.damage').html(weapons[item].damage);
        container.find('.fire_rate').html(weapons[item].fire_rate);
        container.find('.range').html(weapons[item].range);
        container.find('.accuracy').html(weapons[item].accuracy);
        container.find('.weight').html(weapons[item].weight);
        container.find('.value').html(weapons[item].value);
        container.find('.ammo').html(weapons[item].ammo);
      }
    }
  });

  var brief=[{"Strength is a measure of your raw physical power.It affects how much you can carry,and the damage of all melee attacks.":"a"},{"perception":"a"},{"endurance":"a"},{"charisma":"a"},{"Intelligence is a measure of your overall mental acuity,and affects the number of Experiance Point earned.":"a"},{"agility":"a"},{"lucky":"a"}];
  $('.special-staats .row .col-12').on('mouseenter',function(e){
    var currentt_item = $(e.currentTarget).attr('class');

    for(items in brief){
      if(brief[items].name == currentt_item){
        var containerr = $('.spl_briefcontainer');
        containerr.find('.spl_briefnote').html(brief[items].spl_briefnote);
      }
    }
  });
});
