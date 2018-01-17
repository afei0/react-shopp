import React from 'react'
import Button from './component/Button/Button'
import Sidebar from './component/sidebar/Sidebar'
class App extends React.Component {
  state = {
    show:false
  }
// constructor(){
//   super()
//
// }
handleOpen = () => {
  this.setState({
    show:true
  })
}
handleClick = () => {
  console.log(this.button)
  this.button.handleClick()
  // this.button.handleShow()
}

  render () {
    console.log(this.state.show);
    return(
      <div>
        <button onClick={ this.handleClick }>按钮</button>
        <Button ref = { btn=> { this.button=btn } } click = { this.handleOpen } />
        <Sidebar show = { this.state.show } />
      </div>
    )
  }
}

export default App;
