import React from 'react'
import SideBar from './SideBar'
import { Grid } from "semantic-ui-react";
import Selection from './Selection';

export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={14}>
                       <Selection/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
