import React,{Component} from 'react';
import {Collection,CollectionItem,Row,Col,CardPanel,Button} from 'react-materialize';


export const Finish =(props)=>{
  return(
            <div>
            <br />
              <Row>
                  <Col s={12} m={2} offset={"m5"} >
                      <h5 class="teal-text text-lighten-2">Score</h5>
                      <CardPanel className="teal lighten-2 black-text" title="Score">
                          <span class="header center white-text text-lighten-2">{props.score}</span>
                      </CardPanel>
                  </Col>
                </Row>
                 <Button waves='light' onClick={()=>props.handleState('running')}>Start Test Again</Button>
                 </div>
      )
} 

export default Finish