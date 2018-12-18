import React, { Component } from "react";
import { getAll } from "../services/ApiStarWars"
import { Link } from "react-router-dom";
import Card from "./Card";

class AllPeople extends Component {
  state = {
    people: []
    
  };

  componentWillMount = () => {
    getAll()
      .then(people => {
        this.setState({people:people.results});
        console.log(people)
        console.log('dentro de willmount' + this.state)
      })
      .catch(err => console.log(err));
  };

  render() {
    const { people } = this.state;
    console.log('dentro de render' + people)
    
    return (
      <div>
        <p>dummy test</p>

        {people.map((p, key) => {
        return (
          <section key={key} style={{ marginRight: "5vw" }}>
            <Card {...p}/>
          </section>
        );
      })}

          {/* {people.map(people => {return (<div key={people.results.url}>
            <p>inside map </p>
                <Link to="/StarWars/:id"><h3>{people.result.name}</h3></Link>
                <h4>Planeta hogar: {people.result.homeworld}</h4>
                <p>Especie: {people.result.species}</p>
              </div>
            );
          })} */}

        </div>
      
    );
  }
}

export default AllPeople;
// {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.co/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.co/api/people/1/"
// }