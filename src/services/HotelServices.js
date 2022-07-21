import axios from "axios";

const HOTEL_API_BASE_URL="http://localhost:8081/user/hotelDetails";

class HotelServices{
    getAllHotelDetails(){
        return axios.get(HOTEL_API_BASE_URL);
    }
}

export default new HotelServices();