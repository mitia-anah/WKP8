const parade = [{
        title: 'Decision',
        name: 'Fanja',
        style: 'Christian',
        length: "4 min",
        url: "https://rb.gy/uihc1j",
        id: 1598085964585,
        picture: "./images/tdl.jpg",
    },
    {
        title: 'Never enough',
        name: 'loren',
        style: 'Slow',
        length: "4 min 20s",
        url: "https://rb.gy/sjeujk",
        id: 1598085988254,
        picture: "./images/loren.jpg",
    },
    {
        title: 'Baby',
        name: 'justin bieber',
        style: 'Rap',
        length: " 3 min 30s",
        url: "https://rb.gy/umnivn",
        id: 1598086012527,
        picture: "./images/justin-bieber.jpg",
    },
];

const addSongForm = document.querySelector('.form');
const showList = document.querySelector('.show-list');
// const bookLibrary = document.querySelector('.book-library');
// const listOfBook = document.querySelector('.lists-of-book');
const addBtn = document.querySelector('.add-btn');

// Create list of book to show in the table 
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
                <span>
                    Score
                </span>
                <span>
                    <button value="${song.id}"></button>
                </span>
            </li>
        `;
        })
        .join('');
    showList.innerHTML = html;
};
showListOfSongs();
// addSongForm.addEventListener('submit', addBtn);

const addNewSong = e => {
    e.preventDefault();
    const songs = e.currentTarget;
    const newSong = {
        title: songs.title.value,
        name: songs.name.value,
        style: songs.style.value,
        length: songs.length.value,
        url: songs.url.value === 'true', // true or false if we have anything else
        id: Date.now(),
    };
    parade.push(newSong);
    showList.dispatchEvent(new CustomEvent('listUpdated'));
    songs.reset();
};
addBtn.addEventListener('submit', addNewSong);

//     // fire off a custom event that will tell anyone else who cares
//     listOfBook.dispatchEvent(new CustomEvent('libraryUpdated'));
// };

// //Here is the html we will get later
// const handleNewbook = () => {
//     const newBookhtml = library.map(item =>
//             `<li class="book-list">
//                 <span>${item.title}</span>
//                 <span>${item.author}</span>
//                 <span>${item.genre}</span>
//                 <span>${item.pages}</span>
//                 <span>             
//                     <img ${item.status ? '' : 'hidden'}
//                         src="./assets/icons/checked.svg" 
//                         alt="The book ${item.title} is read"/>
//                     <img ${item.status ? 'hidden' : ''}
//                         src="./assets/icons/unchecked.svg" 
//                         alt="The book ${item.title} is not read"/>
//                 </span>
//                 <td><img src="./assets/icons/trash.svg" alt="Delete" ${book.id} from the list</td>
//             </tr>
//                 <span>
//                     <button class="remove" arial-label="Remove 
//                         ${item.title} 
//                         ${item.author}
//                         ${item.genre}
//                         ${item.pages}"
//                     value="${item.id}">&times;
//                     </button>
//                 </span>
//         </li>`)
//         .join(" ");
//     listOfBook.innerHTML += newBookhtml;
// }

// // Delete the book from the list
// const deleteBook = id => {
//     console.log('deleting book', id);
//     library = library.filter(libraries => libraries.id !== id);
//     listOfBook.dispatchEvent(new CustomEvent('libraryUpdated'));
// };

// // Mark the boo as 'read'
// const markAsRead = id => {
//     console.log(id);
//     const bookRead = library.library.find(libraries => libraries.id === id);
//     bookRead.status = !bookRead.status;
//     listOfBook.dispatchEvent(new CustomEvent('libraryUpdated'));
// };
// // Set the book to localStorage
// const mirrorToLocalStorage = () => {
//     console.log('mirroring book to local storage');
//     localStorage.setItem('library', JSON.stringify(library));
// };

// // Restore it form the local storage
// const restoreFromLocalStorage = () => {
//     console.log('Restoring from Ls(localStorage)');
//     const localBook = JSON.parse(localStorage.getItem('library'));
//     if (localBook) {
//         library.push(...localBook);
//     };
//     listOfBook.dispatchEvent(new CustomEvent('libraryUpdated'));
// };

// // Listen for the event
// myLibrary.addEventListener('submit', handleSubmit);
// listOfBook.addEventListener('libraryUpdated', handleNewbook);
// listOfBook.addEventListener('libraryUpdated', mirrorToLocalStorage);
// listOfBook.addEventListener('click', function(e) {
//     const id = e.currentTarget.value;
//     if (e.target.matches('.remove')) {
//         deleteBook(id);
//     }
//     if (e.target.matches('input[type="checkbox"]')) {
//         console.log('marking as complete', id);
//     }
// });
// restoreFromLocalStorage();