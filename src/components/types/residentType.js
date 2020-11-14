import PropTypes from 'prop-types';

export const residentType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    species: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    vehicles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    starships: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  })),
]);
