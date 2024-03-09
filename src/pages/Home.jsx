import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(10);
  const [gender, setGender] = useState("");
  const { search } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?gender=${gender}&search=${search}&page=${page}&results=${results}`
      )
      .then((res) => {
        setCards(res.data.results);
      });
  }, [page, results, gender, search]);

  // Filter cards based on the search query
  const filteredCards = cards.filter((user) =>
    user.name.first.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <select
        className="form-select form-select-lg mb-3 my-3"
        aria-label=".form-select-lg example"
        onChange={(e) => setGender(e.target.value)}
      >
        <option selected>Open this select menu for gender selection</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className="container">
        <div className="row d-flex flex-row flex-wrap">
          {filteredCards.length > 0 ? (
            filteredCards.map((user) => (
              <div className="col-md-3" key={user.id.value}>
                <Cards
                  name={user.name.first + " " + user.name.last}
                  gender={user.gender}
                  address={user.location.city}
                  id={user.id.value}
                  image={user.picture.thumbnail}
                  user={user}
                />
              </div>
            ))
          ) : (
            <h1>No results found</h1>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <button
              className="btn btn-outline-primary px-5"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </button>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <button
              className="btn btn-outline-primary px-5"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
