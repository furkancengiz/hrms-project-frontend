import React, { useEffect,useState } from 'react'
import CandidateAcademyService from '../services/candidateAcademyService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
const colors = [
    'green',
]


export default function CandidateAcademyList() {

    const [candidateAcademyies, setcandidateAcademyies] = useState([]) 
useEffect(()=>{
    let candidateAcademyService = new CandidateAcademyService()
    candidateAcademyService.getCandidateAcademyies().then(result=> setcandidateAcademyies(result.data.data))},[])

    return (
        <div>
             {colors.map((color) => (
                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell>İsim</Table.HeaderCell>
                            <Table.HeaderCell>Soyisim</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>

                            

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            candidateAcademyies.map(candidateAcademy => (
                                <Table.Row key={candidateAcademy.id}>

                                    <Table.Cell>{candidateAcademy.departmentName}</Table.Cell>
                                    <Table.Cell>{candidateAcademy.schoolName}</Table.Cell>
                                    <Table.Cell>{candidateAcademy.startedYear}</Table.Cell>
                                    <Table.Cell>{candidateAcademy.finishedYear}</Table.Cell>
                                </Table.Row>
                            ))
                        }

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            ))} 
        </div>
    )
}
