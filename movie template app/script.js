d
const main=document.querySelector('main')
const form=document.querySelector('#form')
const search=document.querySelector('.search')

getMovies(apiUrl)

async function getMovies(url)
{
    const resp=await fetch(url)
    const respData=await resp.json()
    
    console.log(resp)
    console.log(respData)

    // respData contains result

    showMovies(respData.results)
}

function showMovies(movies)
{
    main.innerHTML=''
    movies.forEach((movie) => {
        console.log(movie)

      //  destructuring
        const {poster_path,title,vote_average,overview}=movie

        if(poster_path!=null)
        {
            const movieEl=document.createElement('div')
       //     movieEl.classList.add('movie')
            movieEl.innerHTML=`
                <img src="${imgpath+poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${RatingColour((vote_average))}">${vote_average}</span>
                </div>
                <div class="overview">
                    ${overview}
                </div>
            `
            main.appendChild(movieEl)
        }
    }); 
}

function RatingColour(rate)
{
    if(rate<5)
        return 'red'
    else if(rate<8)
        return 'orange'
    else
        return 'green'
}

form.addEventListener('submit',(e)=>{

    e.preventDefault()
    const searchTerm=search.value

    if(searchTerm)
    {
        getMovies(searchApi+searchTerm)
        search.value=""
    }

})




















