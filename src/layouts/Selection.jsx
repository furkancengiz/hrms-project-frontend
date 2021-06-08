import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobpositionList from '../pages/JobpositionList'
import CandidateList from '../pages/users/CandidateList'
import EmployerList from '../pages/users/EmployerList'


export default function Selection() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <GridColumn size={14}>
                    <CandidateList/>
                </GridColumn>
                </Grid.Row>
                <Grid.Row>
                <GridColumn size={14}>
                    <EmployerList/>
                </GridColumn>
                </Grid.Row>
                <Grid.Row>
                <GridColumn size={14}>
                   <JobpositionList/>
                </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
