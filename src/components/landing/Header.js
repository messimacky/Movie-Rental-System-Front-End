import mylogo from '../../assets/svg/logo.svg'
import './header.css'
import { useState, useEffect } from 'react';
import { Details } from './details'
import { EachMovie } from './eachMovie';
import { Footer } from './footer'; 
import Top from './Top';
import { useAuth0 } from '@auth0/auth0-react';
import TopDash from './TopDash';
import HeaderBody from './HeaderBody';
import Dashboard from '../pages/Dashboard';

function Header(props){
    let [movieList, setMovieList] = useState([]);
    let [updateVal, setUpdateVal] = useState(0);
    let [time, setTime] = useState("week");
    let [type, setType] = useState("movie");
    const [currentIndex, changeCurrentIndex] = useState(0);
    const [movieID, setMovieID] = useState(453395);
    const [movieDetails, setMovieDetails] = useState({});
    const [movieGenres, setMovieGenre] = useState( movieDetails['genres']);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const { user, logout, isAuthenticated } = useAuth0(); 

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/trending/' + type +'/' + time + '?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb&page=' + page)
      .then((result) => result.json())
      .then((resultJSON) => {setMovieList(resultJSON.results); setTotalPages(resultJSON['total_pages'])})
      .catch((e) => console.log(e))
      .finally(() => {setUpdateVal(1); })
    }, [type, time, page])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb&language=en-US')
        .then((result) => result.json())
        .then((resultJSON) => {setMovieDetails(resultJSON); setMovieID(resultJSON['id']);   console.log(resultJSON['budget'])})
        .catch((e) => console.log(e))
        .finally(() => {setMovieGenre(movieDetails['genres']);})  
    },[movieID, type, page]);

    function changeMovie(index) {
        console.log(index);
        movieList.length > 0 ? setMovieID(movieList[index]['id']) : setMovieID(453395);
        changeCurrentIndex(index);
        setMovieGenre(movieDetails['genres']);
        scrollToTop();
    }
   
    function scrollToTop() {
       
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            {user?.picture && <><TopDash /><Dashboard /></>} 
            {!user?.picture && <><Top /><HeaderBody /></>}   
            
             
        </div>
    )
}
export default Header