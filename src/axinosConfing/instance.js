import axios from 'axios';

 const axiosInstance=axios.create({
baseURL:"https://api.themoviedb.org/3/",
// headers:{
    
// },
params:{
    api_key:"1fadbcbe68fde9727df1f4c04d77be82",
    page:1
}

})
export default axiosInstance