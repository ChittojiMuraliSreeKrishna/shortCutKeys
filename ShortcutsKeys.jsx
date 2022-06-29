import React, { Component } from 'react'
import Hotkeys from 'react-hot-keys';
export default class ShortcutsKeys extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
  }
  componentDidMount(){
    // document.body.addEventListener("keypress", (e) => {
    //     if (e.ctrlKey && String.fromCharCode(e.keyCode).toLowerCase() === 'a') {
    //         this.setState({opened: !this.state.opened});
    //     }
    // });
  }

  // clickBtn = (e) => {
  //   if(e.ctrlKey && String.fromCharCode(e.keyCode).toLowerCase() === 'j'){
  //     this.clickBtn()
  //   }
  // }

  _handleKeyDown = (e) => {
    const {input} = this.state
    if (e.ctrlKey && String.fromCharCode(e.keyCode).toLowerCase() === 'i') {
      alert(input);
    }
  }
handleInput = (event) => {
  this.setState({input: event.target.value})
}

handleClick = () => {
  console.log(this.state.input)
}

onKeyDown(keyName, e, handle) {
  e.preventDefault()
  this.handleClick()
}

  render() {
    return (
      <div>
        <Hotkeys
          keyName='alt+a'
          onKeyDown={this.onKeyDown.bind(this)}
        >
        ShortcutsKeys
        <input type="text" name="shortcut" id="new" placeholder='type here' onChange={this.handleInput} onKeyDown={this._handleKeyDown}/>
        <button onClick={this.handleClick}>Press</button>
        </Hotkeys>
      </div>
    )
  }
}
