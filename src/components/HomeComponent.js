import React,{ Component } from "react";
import { Button } from "reactstrap";
import { Link,Redirect,withRouter } from 'react-router-dom';
import desktopImage from '../assets/images/engaged.png';

class Home extends Component{


	constructor(props){
		super(props);
		this.handlegame1 = this.handlegame1.bind(this);
		this.handlegame2 = this.handlegame2.bind(this);
		this.handlegame3 = this.handlegame3.bind(this);
	}

	handlegame1(){
		this.props.history.push('/game1');
	}

	handlegame2(){
		this.props.history.push('/game2');
	}

	handlegame3(){
		this.props.history.push('/game3');
	}

	render(){
		return(
			<div className="App1" style={{backgroundImage: `url(${desktopImage})` }}> 
			<div className="center">
				<div className="col-12">
					<Button className="btnstyle mr-3 mb-4" onClick={this.handlegame1}> Game-1 </Button>
					<Button className="btnstyle mr-3 mb-4" onClick={this.handlegame2}> Game-2 </Button>
					<Button className="btnstyle mr-3 mb-4" onClick={this.handlegame3}> Game-3 </Button>
				</div>
			</div>
			</div> 
		);
	}
}

export default withRouter(Home);