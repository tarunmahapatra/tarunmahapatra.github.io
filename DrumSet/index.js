var clapHover=document.getElementById("clap");
function Clap(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/clap.wav";
    SoundNode.appendChild(SoundSource);
}
clapHover.addEventListener('mouseover',Clap);
document.body.addEventListener('keydown',function(e){
    var x=e.keyCode;
    console.log("Key pressed ", x);
    switch(x){
        case 65:
            Clap();
            break;
        case 83:
            Boom();
            break;
        case 68:
            Hihat();
            break;
        case 70:
            Kick();
            break;
        case 71:
            OpenHat();
            break;
        case 72:
            Ride();
            break;
        case 74:
            Snare();
            break;
        case 75:
            Tink();
            break;
        case 76:
            Tom();
            break;

    }
});
var boomHover=document.getElementById("boom");
function Boom(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/boom.wav";
    SoundNode.appendChild(SoundSource);
}
boomHover.addEventListener('mouseover',Boom);
var hihatHover=document.getElementById("hihat");
function Hihat(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/hihat.wav";
    SoundNode.appendChild(SoundSource);
}
hihatHover.addEventListener('mouseover',Hihat);
var kickHover=document.getElementById("kick");
function Kick(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/kick.wav";
    SoundNode.appendChild(SoundSource);
}
kickHover.addEventListener('mouseover',Kick);
var openhatHover=document.getElementById("openhat");
function OpenHat(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/openhat.wav";
    SoundNode.appendChild(SoundSource);
}
openhatHover.addEventListener('mouseover',Kick);
var rideHover=document.getElementById("ride");
function Ride(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/ride.wav";
    SoundNode.appendChild(SoundSource);
}
rideHover.addEventListener('mouseover',Ride);
var snareHover=document.getElementById("snare");
function Snare(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/snare.wav";
    SoundNode.appendChild(SoundSource);
}
snareHover.addEventListener('mouseover',Snare);
var tinkHover=document.getElementById("tink");
function Tink(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/tink.wav";
    SoundNode.appendChild(SoundSource);
}
tinkHover.addEventListener('mouseover',Tink);
var tomHover=document.getElementById("tom");
function Tom(){
    var SoundNode=document.createElement('audio');
    SoundNode.autoplay='true';
    var SoundSource=document.createElement('source');
    SoundSource.src="./assets/tom.wav";
    SoundNode.appendChild(SoundSource);
}
tomHover.addEventListener('mouseover',Tom);







