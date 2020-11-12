export const BASE_URL = 'https://swapi.dev/api/';

export const request = (url, options) => fetch(`${BASE_URL}${url}`, options)
  .then((result) => {
    if (!result.ok) {
      throw new Error(`${result.status} - ${result.statusText}`);
    }

    return result.json();
  })
  .then(result => result.results)
  .then(result => result.map((planet, i) => ({
    ...planet,
    id: i + 1,
  })));

export const getPlanets = () => request('planets/');
