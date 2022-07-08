var options =  {
  clipped: false,
  looping: false,
  duration: 3,
  clip_index: 0,
}
var start = true;

function setup_video_clips(){
  mp.options.read_options(options, "clipper");
  if(options.clipped){
    mp.set_property("keep-open","always");
    mp.observe_property("playback-time", "number", clip_looper);
    mp.observe_property("eof-reached", "bool", eof_looper);
    mp.add_key_binding("l", "looping", toggle_looping);
    mp.add_key_binding("left","go_back_one",go_back_one);
    mp.add_key_binding("right","go_forward_one",go_forward_one);
  }
}
function go_to_clip_beginning(){
  mp.set_property_number("playback-time", start_time());
}

function clip_looper(name, value){
  if(value){
    if(start && value>0){
      start = false;
      go_to_clip_beginning();
    }
    else if(value > end_time() ){
      if(options.looping){
        go_to_clip_beginning();
      }
      else{
        mp.set_property("pause","yes");
      }
    }
  }
}
function eof_looper(name,value){
  if(value == true && options.looping){
    go_to_clip_beginning()
    mp.set_property("pause","no");
  }
}
function go_back_one(){
  if(mp.get_property("pause")=="yes"){
    go_to_clip_beginning();
    mp.set_property("pause","no");
  }else if(options.clip_index>0){
    options.clip_index--;
    go_to_clip_beginning();
  }else{
    go_to_clip_beginning();
  }
  print_current_clip();
}

function go_forward_one(){
  if(end_time()==start_time()+options.duration){
    options.clip_index++;
    go_to_clip_beginning();
    mp.set_property("pause","no");
    print_current_clip();
  }else{
    print("Reached end of clips")
  }
}

function toggle_looping(){
  options.looping = !options.looping;
  if(mp.get_property("pause")=="yes" && options.looping){
    mp.set_property("pause","no");
  }
}

function print_current_clip(){
  print("Playing Clip #"+options.clip_index+": "+convert_to_time(start_time())+" - "+ convert_to_time(end_time()))
}

function convert_to_time(seconds){
  output=""
  output+=("00"+Math.floor(seconds/3600)).slice(-2)+":";
  output+=("00"+Math.floor(seconds%3600/60)).slice(-2)+":";
  output+=("00"+Math.floor(seconds%60)).slice(-2);
  return output;
}

function start_time(){
  return options.clip_index * options.duration
}

function end_time(){
  return Math.min((options.clip_index + 1)* options.duration, mp.get_property_number("duration") )
}

setup_video_clips()
