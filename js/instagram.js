
// TODO: This information must be hidden to prevent instagram hacks 
// All this information shuold be taken from the backend by a rest service, including the  results
var access_token = '2317972600.1af79f8.6d5105a7470f4945844ce07e80ad352d';
var clientid = '1af79f89bc4b4e20ad917e6e381bc960';
var userid = 2317972600;
var num_photos = 20;

// function to call the instagram gallery
$.ajax({
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent?access_token=' + access_token,
  dataType: 'jsonp',
  type: 'GET',
  data: {client_id: clientid, count: num_photos},
  success: function(data){
    for( x in data.data ){ //On succesfully data retrieve add each element to the #instagramPics div
      $('#instagramPics').append('<div class="item"><a target="_bank" href="'+data.data[x].link+'"><img src="'+data.data[x].images.thumbnail.url+'"></a></li>');
    }
    drawDiamonds();
  },
  error: function(data){
    console.log(data);
  }
});