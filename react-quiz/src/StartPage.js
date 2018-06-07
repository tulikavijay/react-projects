import React,{Component} from 'react';
class StartPage extends Component{
  constructor(props){
  	super(props);
  }
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
          <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1" onClick={()=>this.props.handleState('running')} >Get Started</a>
        </div>
        </div>
       </div>
    </div>
    </div>
  		)
  }
}

export default StartPage;