import {color} from '@mui/system';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {getFavoriteMovie, getMovieByGenre, getMovieGenre, getUserId} from "../util/ApiUtils";
import {Card, Carousel, Col, Row} from "antd";

const ProfilePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [email, setEmail] = useState(null);

    const [user, setUser] = useState({})
    // const handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    //     console.log(user)
    // }

    useEffect(() => {
        console.log(localStorage.getItem("userId"))
        getUserId(localStorage.getItem("userId")).then(data => setUser(data))
        console.log("genurile de film");
    }, []);

    useEffect(() => {
        getFavoriteMovie(localStorage.getItem("userId")).then(data => setMovies(data))
    }, []);

    const handleCardClick = (movie) => {
        setCurrentMovie(movie);
    };


    return (
        <div style={{
            background: `url(https://i.imgur.com/zn8ODjk.jpg) no-repeat center center fixed`,
            backgroundSize: "cover",
            backgroundColor: "#111827",
            color: "white",
            textAlign: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "25px"
        }}>
            <div>
                <h1 style={{fontSize: "36px", marginBottom: "4rem"}}>Hello {user.username}</h1>
                <p style={{marginBottom: "2rem"}}>
                    Username :
                    <input type="text" value={user.username} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <p style={{marginBottom: "2rem"}}>
                    Date of Birth :
                    <input type="text" value={user.userDateOfBirth} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <p style={{marginBottom: "2rem"}}>
                    Email :
                    <input type="text" value={user.userEmail} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <Link to="/home">
                    <button
                        style={{position: "absolute", left: "0", top: "0"}}
                        className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center m-5'>
                        Back to Homepage
                    </button>
                </Link>


                <div className="m-10">
                    <h2 className="text-2xl text-white font-sans font-semibold mb-5 m-3">
                       Liked Movies:
                    </h2>
                    <Carousel
                        dots={false}
                        infinite
                        autoplay
                        speed={300}
                        slidesToShow={3}
                        slidesToScroll={1}
                    >
                        {movies.map((movie) => (
                            <Link
                                to={`/watch/${movie.id}`}
                                key={movie.id}
                                onClick={() => this.props.history.push(`/watch/${movie.id}`)()}
                            >
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Card
                                            className="border-y-4 border-purple-600 m-3"
                                            hoverable
                                            onClick={() => handleCardClick(movie)}
                                            cover={
                                                <img
                                                    className="h-64 w-auto object-cover"
                                                    src={
                                                        `https://image.tmdb.org/t/p/w500` + movie.backdrop_path
                                                    }
                                                    alt={movie.english_title}
                                                />
                                            }
                                            bodyStyle={{padding: "8px"}}
                                        >
                                            <Card.Meta
                                                title={movie.english_title}
                                                description={
                                                    <div className="font-sans font-semibold text-lightgrey">
                                                        <p>IMDB rating: {movie.imdb}</p>
                                                        <p>Release date: {movie.release_date}</p>
                                                        <p>Duration: {movie.runtime} min</p>
                                                    </div>
                                                }
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    )
        ;
};

export default ProfilePage;