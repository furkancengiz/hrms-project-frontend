import axios from "axios"

export default class JobPositionService{
    getJobPostions(){
        return axios.get("http://localhost:8080/api/japPositionController/getall")
    }
}