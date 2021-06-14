import React from 'react'
import SideBar from './SideBar'
import { Grid } from "semantic-ui-react";
import Selection from './Selection';
import { Route } from 'react-router';
import JobpositionList from '../pages/JobpositionList';
import EmployerList from '../pages/users/EmployerList';
import JobPositionDetail from '../pages/JobPositionDetail';
import EmployerDetail from '../pages/EmployerDetail';
import CandidateList from '../pages/users/CandidateList';

export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={14}>
                    <Route exact path="/" component={JobpositionList}/>
                    <Route exact path="/employer" component={EmployerList}/>
                    <Route exact path="/jobposition/:id" component={JobPositionDetail}/>
                    <Route exact path="/employer/:id" component={EmployerDetail}/>
                    <Route exact path="/candidate" component={CandidateList}/>
                    

                    
 
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>



        </div>
    )
}
