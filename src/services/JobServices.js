import axios from "axios";

const JOB_API_BASE_URL="http://localhost:8081/user/jobDetails";

class JobServices{
    getAllJobs(){
        return axios.get(JOB_API_BASE_URL);
    }
}

export default new JobServices();
