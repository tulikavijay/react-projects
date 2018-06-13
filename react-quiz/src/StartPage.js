import React,{Component} from 'react';
import {Button} from 'react-materialize';
class StartPage extends Component{
  render(){
  	return (
  	<div>
       <div id="index-banner" class="parallax-container">
       <div class="section no-pad-bot">
      <div class="container">
        <br/>
        <h1 class="header center teal-text text-lighten-2">React Quiz</h1>
        <div class="row center">
          <h5 class="header col s12 light">Answer these 10 basic react questions with 10 points each.</h5>
        </div>
        <div class="row center">
          <Button waves='light' onClick={()=>this.props.handleState('running')}>Get Started</Button>
        </div>
        </div>
       </div>
    </div>
    </div>
  		)
  }
}

export default StartPage;