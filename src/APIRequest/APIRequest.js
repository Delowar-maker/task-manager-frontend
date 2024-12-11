// https://task-manager-jade-seven.vercel.app/api


import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { setToken, setUserDetails } from "../helper/SessionHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import store from "../redux/store/store";

const BaseURL = "https://task-manager-jade-seven.vercel.app/api/v1";

export function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/registration";
    let PostBody = { email: email, firstName: firstName, lastName: lastName, mobile: mobile, password: password, photo: photo }

    return axios.post(URL, PostBody)
        .then((res) => {
            store.dispatch(HideLoader());
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
            store.dispatch(HideLoader());
            ErrorToast(error);
            return false
        });

}


export function LoginRequest(email, password) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else {
            ErrorToast("Invalid Email or Password")
            return false;
        }
    }).catch((err) => {
        ErrorToast(err)
        store.dispatch(HideLoader())
        return false;
    });
}