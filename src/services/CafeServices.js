import axios from "axios";

const CAFE_API_BASE_URL="http://localhost:8081/user/cafeDetails";

class CafeServices{
    getAllCafeDetails(){
        return axios.get(CAFE_API_BASE_URL);
    }
}

export default new CafeServices();