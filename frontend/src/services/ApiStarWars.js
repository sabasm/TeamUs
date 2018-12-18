import axios from "axios";
const url = "https://swapi.co/api";

export const getAll = () => {
  return axios
    .get(url + "/people")
    .then(people => {
      return people.data;
    })
    .catch(err => err.response);
};

export const getPeopleDetail = id => {
  return axios
    .get(url + "/people/" + id)
    .then(people => people.data)
    .catch(err => err.response);
};

// export const getRandomBeer = () => {
//   return axios
//     .get(url + "/random")
//     .then(beers => {
//       return beers.data[0];
//     })
//     .catch(err => err.response);
// };

// export const newBeer = beer => {
//   return axios
//     .post(url + "/new", beer)
//     .then(addedBeer => {
//       return addedBeer.data;
//     })
//     .catch(err => err.response);
// };