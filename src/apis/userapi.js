import axios from 'axios';

export default axios.create({
    baseURL : "http://user-service.eu-central-1.elasticbeanstalk.com"
});