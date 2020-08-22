const parade = [{
        title: 'Decision',
        name: 'Fanja',
        style: 'Christian',
        length: "4 min",
        // picture: 'https://rb.gy/uihc1j',
        id: 1598085964585,
        picture: "./images/tdl.jpg",
    },
    {
        title: 'Never enough',
        name: 'loren',
        style: 'Slow',
        length: "4 min 20s",
        // picture: 'https://rb.gy/sjeujk',
        id: 1598085988254,
        picture: "./images/loren.jpg",
    },
    {
        title: 'Baby',
        name: 'justin bieber',
        style: 'Rap',
        length: " 3 min 30s",
        // picture: 'https://rb.gy/umnivn',
        id: 1598086012527,
        picture: "./images/justin-bieber.jpg",
    },
];

const addSongForm = document.querySelector('form');
const showList = document.querySelector('.show-list');
const addBtn = document.querySelector('.add-btn');

// Create list of songs to show in the table 
const showListOfSongs = () => {
    const html = parade
        .map(song => {
            return `
            <li class="song-list">
                <img src="${song.picture}" alt="">
                <span>
                    <h3>${song.title}</h3>
                    <p>${song.style}</p>
                </span>
                <span>
                    <h3>${song.name}</h3>
                    <p>${song.length}</p>
                </span>
                <span> Score:</span>
                <span>
                    <button value="${song.id}" class="delete" aria-label="Delete book ${song.title}">
                        <img src="./assets/trash.svg" alt="Delete" ${song.id} from the list/>
                    </button>
                </span>
            </li>
        `;
        })
        .join('');
    showList.innerHTML = html;
};
showListOfSongs();

// Add new list of song
const addNewSong = e => {
    e.preventDefault();
    const songs = e.currentTarget;
    const newSong = {
        title: songs.title.value,
        name: songs.name.value,
        style: songs.style.value,
        length: songs.length.value,
        picture: songs.picture.value,
        id: Date.now(),
    };
    parade.push(newSong);
    console.log(newSong);
    showList.dispatchEvent(new CustomEvent('listUpdated'));
    songs.reset();
};

// function handle delete button
const handleClick = e => {
    const bin = e.target.closest('button.delete');
    // if the delete button was clicked
    if (bin) {
        const id = Number(bin.value);
        deletedSong(id);
        console.log(id);
    }
};

// song to delete
const deletedSong = idToDelete => {
    const element = parade.filter(song => song.id !== idToDelete);
    showList.dispatchEvent(new CustomEvent('listUpdated'));
    console.log(`this ${element}is deleted`);
};


// listen for the event
addSongForm.addEventListener('submit', addNewSong);
showList.addEventListener('listUpdated', showListOfSongs);
window.addEventListener('DOMContentLoaded', showListOfSongs);
showList.addEventListener('click', handleClick);