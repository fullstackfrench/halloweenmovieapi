document.querySelector('button').addEventListener('click', getMovie)

function getMovie(){
    const movie = document.querySelector('input').value
    const url = `/api/${movie}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#movieName').innerText = data['movieName']
        document.querySelector('#releaseYear').innerText = data['releaseYear']
        document.querySelector('#directorName').innerText = data['directorName']
        document.querySelector('#rottenTomatoes').innerText = data['rottenTomatoes']
    })
}
