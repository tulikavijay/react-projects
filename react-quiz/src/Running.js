import React,{Component} from 'react';
import {Collection,CollectionItem,Row,Col,CardPanel,Button} from 'react-materialize';

class Running extends Component{
  constructor(props){
  	super(props);
    this.state={ques:1,score:0,isLoaded:false,items:[]};
  }
  componentDidMount() {
    fetch("//api.jsonbin.io/b/5bcefbce51e8b664f2c04383")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
          });
        }
      )
  }
  checkAnswer(value){
      if(value==="true"){
        this.setState((prevState)=>{
          return {ques:prevState.ques+1,score:prevState.score+10};
        });
      }
      else{
          this.setState((prevState)=>
              {
                return {ques:prevState.ques+1};
              }
            )
          }
  }
  renderQuestions(){
      return(
              <div>
              <Collection header={this.state.items[this.state.ques-1]["question"]} >
                 {
                  this.state.items[this.state.ques-1]["answers"].map(ans =>(<CollectionItem href='#' onClick={()=>this.checkAnswer(ans.correct)}>{ans.value}</CollectionItem>))
                 } 
              </Collection>
              </div>
           
        )
  }
  renderFinish(){
    return(
            <div>
              <Row>
                  <Col s={12} m={2} offset={"m5"} >
                      <h5 class="teal-text text-lighten-2">Score</h5>
                      <CardPanel className="teal lighten-2 black-text" title="Score">
                          <span class="header center white-text text-lighten-2">{this.state.score}</span>
                      </CardPanel>
                  </Col>
                </Row>
                 <Button waves='light' onClick={()=>this.props.handleState('running')}>Start Test Again</Button>
                 </div>
      )
  }
  render(){
   const  len=this.state.items.length;
   console.log(len);
   if(this.state.isLoaded){
    return (
            <div>
            <h3 class="header center teal-text text-lighten-2">React Quiz</h3>
             <Row>
              <Col s={12} m={2}>
              <h5 class="teal-text text-lighten-2">Question</h5>
                  <CardPanel className="teal lighten-2 black-text" title="Question">
                      <span class="header center white-text text-lighten-2">{this.state.ques}</span>
                  </CardPanel>
              </Col>
              <Col s={12} m={2} offset={"m8"} >
                  <h5 class="teal-text text-lighten-2">Score</h5>
                  <CardPanel className="teal lighten-2 black-text" title="Score">
                      <span class="header center white-text text-lighten-2">{this.state.score}</span>
                  </CardPanel>
              </Col>
          </Row>
            {
              this.state.ques <= len ?this.renderQuestions():this.props.handleState('finished',this.state.score)
            }
            <br />
            <Button waves='light' onClick={()=>this.props.handleState('start')}>Go to Main Page</Button>
            <br />
            </div>
          )
   }
   else{
    return <div></div>
   }
  	
  }
}

export default Running;