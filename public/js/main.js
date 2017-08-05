
var dummyData = [
  {
    name: 'Great Vlaue Lactose-Free Milk',
    photo: 'https://ll-us-i5.wal.co/asr/815b967e-6617-4b97-9bac-ce71ce8e3541_1.7bbdba37472549422f80e8ebe0253fe1.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 31,
    dislikes: 2
  },
  {
    name: 'LACTAID milk',
    photo: 'https://ll-us-i5.wal.co/asr/82585c21-e654-407e-8fef-4ace20fe4074_1.dd7d5936efad4130d200972725d6d34f.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 88,
    dislikes: 5
  },
  {
    name: 'Imtenan Lactose-free Icecream Shop',
    photo: 'http://www.imtenan.com/wp-content/themes/imtenan/images/imtenan.jpg',
    likes: 208,
    dislikes: 11
  },
  {
    name: 'LaLa Lactose Free Milk',
    photo: 'https://ll-us-i5.wal.co/asr/250f3cc8-a2be-41cb-a8d5-48e392ba4f39_1.b2ba739029de07d8cea3e80583053f1e.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 20,
    dislikes: 10
  },
  {
    name: 'LACTAID® 100% Lactose Free',
    photo: 'https://ll-us-i5.wal.co/asr/e3d5a67a-8782-4bc2-b6bc-86256376f7f0_1.6af3b0dda8eee6466a918059ac0aca30.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 148,
    dislikes: 5
  },
  {
    name: 'LACTAID Lactose Free Lowfat',
    photo: 'https://ll-us-i5.wal.co/asr/1848d6b1-6056-44b1-a2be-22918e6b3eb8_1.7aa58819472ad5ac98151fea599d2916.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 48,
    dislikes: 10
  },
  {
    name: 'Hiland 100% Lactose Free Milk',
    photo: 'https://ll-us-i5.wal.co/asr/0ab4ae19-e4e7-4a75-b781-085d15fb2d09_1.0e6b4f9c14d074d845a58548f12b4483.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 48,
    dislikes: 10
  },
  {
    name: 'Great Value Lactose Free Milk',
    photo: 'https://ll-us-i5.wal.co/asr/a8d7e73c-5d35-41ee-8f5b-f369323265ad_1.f376ad8595fffbbd1c3b774b0f74f519.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff',
    likes: 48,
    dislikes: 10
  }
]

$(".chosen-select").chosen({width: "30%"})

$('#searchBox_chosen input').focus()

$("#search").submit(function(e) {
  e.preventDefault()
  if ($('#searchBox').val()) {
    
    // animate
    $('header').css('margin-top', 0)
    $('#results').css('transform', 'translateY(100vh)')
      .html('')
    
//    $.getJSON("/api", function(data) {})
    setTimeout(generateResults, 300)
    
    
    
//    console.log($('#searchBox').val())
  }
});


function generateResults(data) {
  data = dummyData
  data.forEach(function(obj) {
    var item = $('<section class="result"></section>')
    var img = $('<img src="' + obj.photo + '">')
    var footer = $("<div class='footer'></div>")
    var name = $('<h4>' + obj.name + '</h4>')
    var span = $('<span></span>')
    var like = $('<i class="fa fa-thumbs-up"> ' + obj.likes + '</i>')
    var dislike = $('<i class="fa fa-thumbs-down"> ' + obj.dislikes + '</i>')
    span.append(like)
    .append(dislike)
    footer.append(name)
    .append(span)
    item.append(img)
    .append(footer)
    $('#results').append(item)
    var link = $('<a href="/' + encodeURI(obj.name) + '"></a>')
    item.wrapInner(link)
  })
  
  $('#results').fadeIn(200)
    .css('display', 'flex')
    .css('transform', 'translateY(0)')
}





$('.result a').click(function(e) {
  e.preventDefault()
  return false
  alert('ye')
})


$('.new-item-btn').click(function(e) {
  e.preventDefault()
  $('.modal').fadeIn(200)
  $('.modal input:first').focus()
})

$('.modal').on('click', function(e) {
  if (e.target !== this)
    return false
  
  $(this).fadeOut(200)
})


$('.modal .close').click(() => {
  $('.modal').fadeOut(200)
})







