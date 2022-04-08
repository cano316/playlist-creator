let userInput = prompt("Welcome to PlaylistCreator v1.0, what would you like to you?");
const songArtist = [];
const songName = [];
let playlistName;

while (userInput !== 'quit') {
    if (userInput === 'new') {
        playlistName = prompt('What would you like to name your playlist?'); //display this when we list contents of list
        let userArtist = prompt("Enter artist name");
        songArtist.push(userArtist);
        let userSong = prompt("Enter song name");
        songName.push(userSong);
        console.log(`${userSong} by ${userArtist} was successfully added to your playlist "${playlistName}"`);
    } else if (userInput === 'list') {
        console.log('* * * * * *');
        for (i = 0; i < songArtist.length; i++) {
            console.log(`#${i}. ${songName[i]} - ${songArtist[i]}`);
        }
        console.log('* * * * * *');
    }
    userInput = prompt("What else would you like to do?");
}

console.log("Ok, you have quit the app!");

//how do I make this so that it doesn't go back and ask for a name for the playlist?