import axios from "axios"

export default class CandidateAcademyService{
    getCandidateAcademyies(){

        
        return axios.get("http://localhost:8080/api/candidateAcademyController/getall")

    }
}