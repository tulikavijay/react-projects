import React ,{Component} from 'react';
import StartPage from './StartPage.js';
import Running from './Running.js';
import Finish from './Finish.js';

class Banner extends Component{
//banner has three states - start,running and finished

constructor(props){
	super(props);
	this.state = {disp:'start'};
	this.handleState= this.handleState.bind(this);
}
handleState(change,rest=0){
	this.setState({disp:change,score:rest});
}
render(){
   if(this.state.disp ==='start')
   	return <StartPage handleState={this.handleState} />
   if(this.state.disp === 'running')
   	return <Running handleState={this.handleState}/>
   if(this.state.disp ==='finished')
   	return <Finish handleState={this.handleState} score={this.state.score} />
}

}

export default Banner;