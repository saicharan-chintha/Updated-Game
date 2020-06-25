import React,{ Component } from 'react';
import { Button,Modal,ModalHeader,ModalBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Score extends Component{
	constructor(props){
		super(props);
		this.handlePlayAgain = this.handlePlayAgain.bind(this);
		this.handleHome = this.handleHome.bind(this);
	}

	handlePlayAgain(){
		this.props.history.push("/game2");
	}

	handleHome(){
		this.props.history.push("/home");
	}

	render(){
		return(
			<Modal isOpen={true}>
				<ModalHeader>Game Ended!!</ModalHeader>
				<ModalBody>
					Your Total Score : {this.props.score}
					<div className="row mt-2 mb-2">
						<div className="col-4">
							<Button onClick={this.handlePlayAgain}> Play Again </Button>
						</div>
						<div className="col-3">
						</div>
						<div className="col-5">
							<Button onClick={this.handleHome}> Try a Different Game </Button>
						</div>
					</div>
				</ModalBody>
			</Modal>
		);
	}
}

export default withRouter(Score);