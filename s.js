const btn = document.querySelector('button');
const inp = document.querySelector('input');
const movies = document.querySelector('.movies');
// const movie1 = document.querySelector('.movie1');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = inp.value;
    inp.value = '';
    const api = await getApi(data);
    // console.log(api);
    appendData(api,data);
})

async function getApi(data) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`)
    const finalRes = await res.json();
    // console.log(finalRes);
    return finalRes;
}

function appendData(api,data) {
    const movie1 = document.createElement('div');
    const movie2 = document.createElement('div');
    const title = document.createElement('div');
    movie1.classList.add('movie1');
    movie2.classList.add('movie2');
    title.classList.add('title');
    // console.log(movie1);

    api.forEach(element => {
        const img = element.show.image;
        if (img != null && img.original != null) {
            // console.log(img.original);
            const perImg = document.createElement('img');
            perImg.style.borderRadius = '0.5rem';
            perImg.style.width = '9rem';
            perImg.setAttribute('src', img.original);
            movie2.append(perImg);
            const movieName = data.toUpperCase();
            title.innerHTML =`Search result for: ${movieName}`;
        }
    })

    movie1.append(title,movie2);
    movies.append(movie1);
}


