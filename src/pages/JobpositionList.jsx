import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon,Menu, Table, Button } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'


const colors = [
    'green',
]
export default function JobpositionList() {

    const [jobPositions, setJobPositions] = useState([])
    useEffect(() => {
        let jobPositonService = new JobPositionService()
        jobPositonService.getJobPostions().then(result => setJobPositions(result.data.data))
    },[])



    return (
        <div>
            {colors.map((color) => (
                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row >
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                            
                            <Table.HeaderCell>Son Tarih</Table.HeaderCell>
                            <Table.HeaderCell>Açıklama</Table.HeaderCell>
                            <Table.HeaderCell>Kota</Table.HeaderCell>
                            <Table.HeaderCell>Şehir</Table.HeaderCell>
                            <Table.HeaderCell>Detaylar</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            jobPositions.map(jobposition => (
                                <Table.Row key={jobposition.id}>
                                    <Table.Cell>{jobposition.employer.companyName}</Table.Cell>
                                    <Table.Cell>{jobposition.description}</Table.Cell>
                                    <Table.Cell>{jobposition.deadline}</Table.Cell>
                                    <Table.Cell>{jobposition.quota}</Table.Cell>
                                    <Table.Cell>{jobposition.city.cityName}</Table.Cell>
                                    <Table.Cell>
                                   
                                        <Button as={Link} to={`/jobposition/${jobposition.id}`} size='small' positive> Detaylar</Button>
                                        
                                        
                                    </Table.Cell> 
                                </Table.Row>
                            ))
                        }

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
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
