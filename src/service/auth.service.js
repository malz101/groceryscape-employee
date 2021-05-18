import axios from 'axios';
import config from '../config';

export default {
    async login(body){
        return new Promise(async(resolve, reject)=>{
            try{
                const resp = await axios.post(`${config.api}/manage_employee_account/login`, body);

                if(resp.status==200){
                    return resolve(resp.data);
                }
                return reject(resp.data);
            }
            catch{
                return reject({status:500})
            }
        })
    },
    async logout(token){
        return new Promise(async(resolve, reject)=>{
            try{
                const resp = await axios.get(`${config.api}/manage_customer_account/logout`,{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                });

                if(resp.status==200){
                    return resolve(resp.data);
                }
                return reject(resp.data);
            }
            catch{
                return reject({status:500})
            }
        })
    },
    async getEmployee(token){
        return new Promise(async(resolve, reject)=>{
            try{
                const resp = await axios.get(`${config.api}/manage_employee_account/get_employee`,{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                });

                if(resp.status==200){
                    return resolve(resp.data);
                }
                return reject(resp.data);
            }
            catch{
                return reject({status:500})
            }
        })
    }
}