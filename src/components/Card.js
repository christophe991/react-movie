import React from 'react'

const Card = ({movie}) =>{
    const dataFormater = (data) => {
        let [yy, mm, dd] = date.split('-')
        return [dd, mm, yy].join("/")
    }

    const genreFinder = () =>{
        let genreArray = []
        for(let i = 0; i < movie.genre_ids.length; i++){
            switch(movie.genre_ids[i]){
                case 28:
                    genreArray.push('Action')
                    break;
                case 12:
                    genreArray.push('Aventure')
                    break;
                case 16:
                    genreArray.push('Animation')
                    break;
                case 35:
                    genreArray.push('Comédie')
                    break;
                case 80:
                    genreArray.push('Policier')
                    break;
                case 99:
                    genreArray.push('Documentaire')
                    break;
                case 18:
                    genreArray.push('Drame')
                    break;
                case 10751:
                    genreArray.push('Famille')
                    break;
                case 14:
                    genreArray.push('Fantasy')
                    break;
                case 36:
                    genreArray.push('Fiction')
                    break;
                case 27:
                    genreArray.push('Horreur')
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>)
    }

    const addStorage = () =>{
        let storedData = window.localStorage.movies
        ? window.localStorage.movies.split(',')
        :[]

        if(!storedData.includes(movie.id.toString())){
            storedData.push(movie.id)
            window.localStorage.movies = storedData
        }
    }

    const deleteStorage = () =>{
        let storedData = window.localStorage.movies.split(',')
        let newData = storedData.filter((id) => id != movie.id)
        window.localStorage.movies = newData
    }

    return(
        <div className='card'>
            <img src={
                movie.poster_patch
                ? "https://www.bing.com/images/search?view=detailV2&ccid=pDw0KFx4&id=5126019E20B8CD792D60E87064C7594037FEF004&thid=OIP.pDw0KFx4UTSGZDnC4g9XCAHaJ3&mediaurl=https%3A%2F%2Fcinehorizons.net%2Fsites%2Fdefault%2Ffiles%2Faffiches%2Favengers_affichefr_006.jpg&exph=1333&expw=1000&q=affiche+de+film&simid=607986143251676480&form=IRPRST&ck=DE027CC81DDD19EC47ADC7BDB2749D50&selectedindex=86&ajaxhist=0&ajaxserp=0&vt=0&sim=11&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.a43c34285c785134866439c2e20f5708%3Frik%3DBPD%252bN0BZx2Rw6A%26pid%3DImgRaw%26r%3D0"
                + movie.poster_patch
                : "./img/avengers.jpg"
            }
            alt='affiche film'/>
            <h2>{movie.title}</h2>
            {movie.release_date ? (
                <h5>Sorti le : {dataFormater(movie.release_date)}</h5>
            ) : (
                ""
            )}
            <h4>
                {movie.vote_average}/10 <span>⭐</span>
            </h4>

            <ul>
                {movie.genre_ids
                ? genreFinder()
                : movie.genres.map((genre, index) =>(
                <li key={index}>{genre.name}</li>
            ))}
            </ul>
            {movie.overview ? <h3>Synopsis</h3> : ""}
            <p>{movie.overview}</p>

            {movie.genre_ids ? (
                <div className='btn' onClick={() => addStorage()}>
                    Ajoutez au coup de coeur
                </div>
            ) : (
                <div className='btn'
                onClick={() =>{
                    deleteStorage()
                    window.location.reload()
                }}>
                    Supprimer de la liste
                </div>
            )}

            
        </div>
    )
}
export default Card;