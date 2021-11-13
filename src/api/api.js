import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsoneditoronline.herokuapp.com/v1/docs/a60440dc240e45afa65fa68a060af624/'
})

export const requestData = () => {
    return instance.get()
        .then(response => {
            return JSON.parse(response.data.data);
        })
}
