const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@utils' : 'src/utils',
    '@views' : 'src/views',
    '@images' : 'public/images',
    '@Icons': 'src/components/Icons',
  })(config)

  return config;
};