import axios from "axios";

const POST_API_BASE_URL="http://localhost:8081/user/posts";

class PostsServices{
    getAllPosts(){
        return axios.get(POST_API_BASE_URL);
    }
}

export default new PostsServices();