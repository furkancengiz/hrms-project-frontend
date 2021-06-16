import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'
import JobpositionList from './JobpositionList';




const colors = [
    'green',
  ]
export default function JobPositionDetail() {

    let {id} = useParams()
    const [jobPosition, setJobPosition] = useState({})
    useEffect(()=>{
        let jobPositionService=new JobPositionService()
        
        jobPositionService.getById(id).then(result=>setJobPosition(result.data.data))
    },[])

    return (
        <div>

{colors.map((color) => (
      <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi </Table.HeaderCell>
            <Table.HeaderCell>Son Başbru Tarihi</Table.HeaderCell>
            

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{jobPosition.description}</Table.Cell>
            <Table.Cell>{jobPosition.city?.cityName}</Table.Cell>
            <Table.Cell>{jobPosition.workType?.workTypeName}</Table.Cell>
            <Table.Cell>{jobPosition.wayOfWorking?.wayOfWorkingName}</Table.Cell>
            <Table.Cell>{jobPosition.minSalary}</Table.Cell>
            <Table.Cell>{jobPosition.maxSalary}</Table.Cell>
            <Table.Cell>{jobPosition.quota}</Table.Cell>
            <Table.Cell>{jobPosition.createdDate}</Table.Cell>
            <Table.Cell>{jobPosition.deadline}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}

            
        </div>
    )
}
