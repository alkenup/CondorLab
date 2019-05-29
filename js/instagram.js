
var access_token = '2317972600.1af79f8.6d5105a7470f4945844ce07e80ad352d';

var clientid = '1af79f89bc4b4e20ad917e6e381bc960';
var userid = 2317972600;
var num_photos = 20;
 
$.ajax({
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent?access_token=' + access_token,
  dataType: 'jsonp',
  type: 'GET',
  data: {client_id: clientid, count: num_photos},
  success: function(data){
     console.log(data);
    for( x in data.data ){
      $('#galeria-instagram').append('<li><img src="'+data.data[x].images.thumbnail.url+'"></li>');
    }
  },
  error: function(data){
    console.log(data);
  }
});