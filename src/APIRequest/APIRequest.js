// https://task-manager-jade-seven.vercel.app/api


import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";

const BaseURL = "https://task-manager-jade-seven.vercel.app/api/v1";

export function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
    let URL = BaseURL + "/registration";
    let PostBody = { email: email, firstName: firstName, lastName: lastName, mobile: mobile, password: password, photo: photo }

    return axios.post(URL, PostBody)
        .then((res) => {
            if (res.status === 200) {
                if (res.data['status'] === "fail") {
                    if (res.data['data']['keyPattern']['email'] === 1) {
                        ErrorToast("Email Already Exist")
                        return false;
                    }
                    else {
                        ErrorToast("Something Went Wrong")
                        return false;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;
                }
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((error) => {
            ErrorToast(error);
            return false
        });

}


