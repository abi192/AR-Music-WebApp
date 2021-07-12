let drums = new Howl({
    src: ['./audio/drums.mp3']
});

let guitar = new Howl({
    src: ['./audio/guitar.mp3']
});

let mic = new Howl({
    src: ['./audio/mic.mp3']
});

let piano = new Howl({
    src: ['./audio/piano.mp3']
});

drums.play();
guitar.play();
mic.play();
piano.play();

window.onload = function(){
    const drumMarker = document.getElementById('drum-marker');
    drumMarker.addEventListener('markerFound',()=> addDrums() );
    drumMarker.addEventListener('markerLost',()=> removeDrums() );

    const guitarMarker = document.getElementById("guitar-marker");
    guitarMarker.addEventListener('markerFound',()=>{
        addGuitar();
    });
    guitarMarker.addEventListener('markerLost',()=>{
        removeGuitar();
    }); 

    const micMarker = document.getElementById("mic-marker");
    micMarker.addEventListener('markerFound',()=>addMic());
    micMarker.addEventListener('markerLost',()=>removeMic());

    const pianoMarker = document.getElementById("piano-marker");
    pianoMarker.addEventListener('markerFound',()=> addPiano() );
    pianoMarker.addEventListener('markerLost',()=> removePiano());
}

