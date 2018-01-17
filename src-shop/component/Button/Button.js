import React from 'react'

class Button extends React.Component {
  state={
    text:'open'
  }
  handleClick=()=>{
    this.props.click()
    // console.log(document.getElementsByClassName('btn')[0]);
    //源生获取dom节点
    //react获取真实dom
    //标签有个ref={xx=>this.btn=xx}
    //ref 函数内部的参数btn代表的就是真实dom
    // this.xx=btn 将真实dom赋值给组件的xx属性
    this.setState({
      text:'gaile'
    })
  }
  render () {
    return(
      <button onClick={this.handleClick}className='btn'>{this.state.text}</button>
    )
  }
}

export default Button;
