import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/ActionCreators';
import Questions from './QuestionsComponent';
import MatchGroup from './MatchGroup';
import RenderGame from './RenderGame';
import Final from './Final';
import Home from './HomeComponent';
import FinalScore from './FinalScoreComponent';
import { MATCH_INFO } from '../shared/db';
import { questions } from '../shared/final';
import { Button } from 'react-bootstrap';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import "../index.css";

class Main extends Component{
	constructor(props){
    super(props);
  }
  
	render(){

		var mq=[];
		var sq=[];
		console.log("Component mounted");
		questions.MCQ.forEach((mcq) => {
			const newq = {
				"question" : mcq.value.question,
				"options" : [
					{
						"id" : "1",
						"content" : mcq.value.option1
					},
					{
						"id" : "2",
						"content" : mcq.value.option2
					},
					{
						"id" : "3",
						"content" : mcq.value.option3
					},
					{
						"id" : "4",
						"content" : mcq.value.option4
					}
				],
				"answer" : mcq.value.answer
			}
			mq.push(newq);
		});
		questions.SCEN.forEach((sc) => {
			const nq = {
				"question" : sc.value.scenario,
				"options" : [
					{
						"id" : "1",
						"options" : sc.value.stmt1
					},
					{
						"id" : "2",
						"options" : sc.value.stmt2
					},
					{
						"id" : "3",
						"options" : sc.value.stmt3
					}
				],
				"correctAnswer" : [
					{
						"id" : "1",
						"options" : sc.value.cstmt1
					},
					{
						"id" : "2",
						"options" : sc.value.cstmt2
					},
					{
						"id" : "3",
						"options" : sc.value.cstmt3
					}
				]
			}
			sq.push(nq);
		});

		const Question = () =>{
	  		return(
	  			<Questions questions={sq} />
	  		);
	  	}

	  	const Match = () => {
	  		return(
	  			<MatchGroup matchgroups={questions.MATCH} />	
	  		);
	  	}

	  	const Mcq = () => {
	  		return(
	  			<div className="col-12">
	  				<Final quizQuestions={mq} />
	  			</div>
	  		);
	  	}
	  	

		return(
			<Switch>
			  <Route exact path="/home" component={() => <Home />} />	
              <Route exact path="/game1" component={ Question  } />
              <Route exact path="/game2" component={ Match  } />
              <Route exact path="/game3" component={ Mcq } /> 
			  <Redirect to="/home" /> 
            </Switch>	
		)
	}
}
export default withRouter(Main);