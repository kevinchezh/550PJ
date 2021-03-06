import React, {Component}  from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import TeamForm from './TeamForm';
import TeamDetail from './TeamDetail';

class TeamIndex extends Component {
    state={renderChoice:1}
    render() {
        if(this.state.renderChoice === 1) {
            return (
                <div>
                    <TeamForm />
                    {this.renderSearchResult()}
                </div>
            )
        } else if(this.state.renderChoice === 2){
            return (
                <div>
                    <TeamDetail />
                </div>
            )
        } else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    }
    renderSearchResult() {
        if(this.props.team.length > 0) {
            console.log(this.props.team);
            return this.props.team.map((oneTeam) => {
                return (
                    <div key={oneTeam.TEAM_ID+oneTeam.year} className="teamCard">
                        <div className="teamCardName">
                            <button className="card-teamTitle" 
                                    onClick = {()=>{
                                        console.log(oneTeam.TEAM_NAME)
                                        console.log(oneTeam.year);
                                        this.setState({renderChoice:2});
                                        console.log(this.props.fetchTeamDetail(oneTeam.TEAM_NAME));
                                        console.log(this.props.fetchTeamPlayer(oneTeam.TEAM_NAME, oneTeam.year));
                                    }}>
                                    {oneTeam.TEAM_NAME}
                            </button>
                        </div>
                    
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">year: {oneTeam.year}</li>
                            <li className="list-group-item">PTS: {oneTeam.PTS}</li>
                            <li className="list-group-item">REB: {oneTeam.REB}</li>
                            <li className="list-group-item">AST: {oneTeam.AST}</li>
                            <li className="list-group-item">STL: {oneTeam.STL}</li>
                        </ul>
                    
                    </div>
                )
            })
        }
    }
}


function mapStateToProps(state){
    console.log("state Team");
    console.log(state.team);
    return {
        team: state.team
    }
}
export default connect(mapStateToProps,actions)(TeamIndex);