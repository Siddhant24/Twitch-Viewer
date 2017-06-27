var streamer_list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "brunofin", "RobotCaleb", "noobs2ninjas", "comster404"];

streamer_list.forEach(function(streamer){
  $.getJSON(`https://wind-bow.gomix.me/twitch-api/streams/${streamer}?callback=?`, function(json){
    var html = "";
    console.log(json);
    if(json.stream === undefined){
      $("#streamers").append(`<li style="background-color:rgb(196, 3, 23)">${streamer}: account closed</li>`);

    }
    else if(json.stream !== null){
      $("#streamers").append(`<li style="background-color:rgb(98, 94, 114)"><img class="img-circle" width="42" height="42" src=` + json.stream.channel.logo + `><a href=` + json.stream.channel.url + ` target="_blank">${streamer}</a>: ${json.stream.game}</li>`);
    }
    else{
      $("#streamers").append(`<li style="background-color:rgb(168, 3, 3)"><a href=` + `https://www.twitch.tv/${streamer.toLowerCase()}` + `>${streamer}</a>: offline</li>`);
    }
  });
});