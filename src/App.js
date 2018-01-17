import React from 'react'

class App extends React.Component {
  state={
    username:'',
    sex:'yao',
    fruit:[],
    comment:'',
    grade:''
  }
  handleInput=e=>{
    //作为input修改state的函数
    this.setState({
      username:e.target.value
    })
    console.log(this.state.username);
  }
  handleRadio=e=>{
    this.setState({
      sex:e.target.value
    })
  }
  // handleClick=()=>{
  //   console.log(this.input.value);
  // }
  handleSubmit=e=>{
    e.preventDefault()
    const{username,fruit,sex,comment,grade}=this.state
    console.log(`用户名：${username}`)
    console.log(`水果：${fruit}`)
    console.log(`评论：${comment}`)
    console.log(`性别：${sex}`);
    console.log(`等级：${grade}`);

  }
handlecheck=e=>{
  //fruit[]
  //点击的checkbox的状态
  let {fruit}=this.state
  const value=e.target.value
  const ind=fruit.indexOf(value)
  if(ind===-1){
    fruit.push(value)
  }else{
    fruit.splice(ind,1)
  }
  this.setState({
    fruit:fruit
  })

}
handleComment=e=>{
  this.setState({
    comment:e.target.value
  })
}
handleSelect=e=>{
  this.setState({
    grade:e.target.value
  })
}

  render () {
    return(
      <div>
    {
      // <button onClick={this.handleClick}>按钮</button>
      // <input ref={inp=>this.input=inp} type='text' defaultValue='^_^'></input>
    }

        <form>
        username:<input type='text' value={this.state.username} onChange={ this.handleInput }></input><br/>
        性别：
        男<input type='radio' name='sex' value='male' checked={this.state.sex==='male'?true:false} onChange={ this.handleRadio}></input>
        女<input type='radio' name='sex' value='female' checked={this.state.sex==='female'?true:false} onChange={ this.handleRadio}></input>
        人妖<input type='radio' name='sex' value='yao' checked={this.state.sex==='yao'?true:false} onChange={ this.handleRadio}></input><br/>
        你喜欢的水果：<br/>
      香蕉<input type='checkbox' value='banana' onClick={this.handlecheck}></input>
    苹果<input type='checkbox' value='apple' onClick={this.handlecheck} ></input>
    大鸭梨<input type='checkbox' value='pear' onClick={this.handlecheck}></input><br/>



      评论：<br/>
        <textarea value={this.state.comment} onChange={this.handleComment}></textarea><br/>

      等级:<br/>
      <select onChange={this.handleSelect} value={this.state.grade}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
      </select><br/>
      <input type='submit' onClick={this.handleSubmit}></input><br/>
        </form>
      </div>
    )
  }
}
//react  form
//受控组件
//1.将变化的值设置成state
//2.修改state使用onChange事件
//非受控组件
// value    ==>  defaultValue
// checked  ==>  defauleChecked
// selected ==>  defauleSelected
//value值不受state控制  只能使用真是dom节点获取
//如果不使用form本身的提交功能提交数据 而使用ajax期交的话，依然想使用type=submit 按钮提交 注意要阻止submit按钮的默认事件

export default App;
