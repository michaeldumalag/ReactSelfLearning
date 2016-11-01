var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = function() {
  return (
    <div>
      <MyTitle title='whatevs' color='rebeccapurple' />
      <MyTitle title='LOL' color='papayawhip' />
      <MyTitle title='OMGWTFLOL' color='#f06d06' />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
