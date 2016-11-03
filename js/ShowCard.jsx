const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.show.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.show.title}</h3>
      <h4 className='show-card-year'>({props.show.year})</h4>
      <h4 className='show-card-description'>({props.show.description})</h4>
    </div>
  </div>
)

module.exports = ShowCard