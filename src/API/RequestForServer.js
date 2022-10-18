import axios from "axios";

export default class RequestForServer {

    // Шаг отправки увеломления на почту
    static async getUser (){
        const response = await axios.get('http://localhost/shop/')

        return response
    }

}