import PropTypes from 'prop-types';

export const planetType = PropTypes.shape({
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.string,
  films: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ]),
  population: PropTypes.string,
  residents: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ]),
  created: PropTypes.string,
  edited: PropTypes.string,
  url: PropTypes.string,
});
