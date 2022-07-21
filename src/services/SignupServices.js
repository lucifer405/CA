import axios from "axios";

const SIGNUP_API_BASE_URL="http://localhost:8081/user/userDetails";

class SignupServices{
    getAllSignupDetails(){
        return axios.get(SIGNUP_API_BASE_URL);
    }
}

export default new SignupServices();
