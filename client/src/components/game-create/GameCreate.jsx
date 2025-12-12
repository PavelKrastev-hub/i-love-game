import { useNavigate } from "react-router";
import request from "../../utils/request.js";
import { useState } from "react";

export default function GameCreate() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        genre: '',
        players: '',
        date: '',
        imageUrl: '',
        summary: '',
    });

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        try {
            request('http://localhost:3030/jsonstore/games', 'POST', { ...data });

            navigate('/games');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section id="add-page">
            <form id="add-new-game" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" value={data.title} onChange={changeHandler} id="gameName" name="title" placeholder="Enter game title..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" value={data.genre} onChange={changeHandler} id="genre" name="genre" placeholder="Enter game genre..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" value={data.players} onChange={changeHandler} id="activePlayers" name="players" min="0" placeholder="0" />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" value={data.date} onChange={changeHandler} id="releaseDate" name="date" />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" value={data.imageUrl} onChange={changeHandler} id="imageUrl" name="imageUrl" placeholder="Enter image URL..." />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" value={data.summary} onChange={changeHandler} id="summary" rows="5" placeholder="Write a brief summary..."></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    );
}