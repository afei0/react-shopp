import React from 'react'
import './sidebar.css'

class Sidebar extends React.Component {
  state={
    show:false
  }
  //更新props的时候修改state 只能从生命周期函数内修改
  //componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    console.log(this.props.show,nextProps.show);
    if(nextProps.show)this.setState({show:true})
  }
  handleClose = e => {
    if(e.target === e.currentTarget){

      this.setState({show:false})
    }
  }
  render () {
  return(
    <div className = 'sidebar-wrap' style = { { display:this.state.show ? 'block':'none' } } onClick = { this.handleClose }>
      <div className='sidebar'>
        <h3>Sidebar</h3>
      </div>
    </div>
  )
  }
}

export default Sidebar;
