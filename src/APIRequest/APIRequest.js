// https://task-manager-jade-seven.vercel.app/api


import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { SetProfile } from "../redux/state-slice/profile-slice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import { SetSummary } from "../redux/state-slice/summary-slice";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/task-slice";
import store from "../redux/store/store";



const BaseURL = "https://task-manager-jade-seven.vercel.app/api/v1";

const AxiosHeader = { headers: { "token-key": getToken() } }

export function NewTaskRequest(title, description) {


    store.dispatch(ShowLoader())

    let URL = BaseURL + "/createTask";
    let PostBody = { "title": title, "description": description, status: "New" }

    return axios.post(URL, PostBody, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            SuccessToast("New Task Created")
            return true;
        }
        else {
            ErrorToast("Something Went Wrong")
            return false;
        }

    }).catch((err) => {
        ErrorToast(`${err}"Something Went Wrong"`)
        store.dispatch(HideLoader())
        return false;
    })
}


export function LoginRequest(email, password) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/login";
    let PostBody = { "email": email, "password": password }
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
        ErrorToast(`${err}"Something Went Wrong"`)
        store.dispatch(HideLoader())
        return false;
    });
}

export function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/registration";
    let PostBody = { email: email, firstName: firstName, lastName: lastName, mobile: mobile, password: password, photo: photo }
    return axios.post(URL, PostBody).then((res) => {
        store.dispatch(HideLoader())
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
    }).catch((err) => {
        store.dispatch(HideLoader())
        ErrorToast(`${err}"Something Went Wrong"`)
        return false;
    })
}


export function TaskListByStatus(Status) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/listTaskByStatus/" + Status;
    axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (Status === "New") {
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if (Status === "Completed") {
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if (Status === "Canceled") {
                store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if (Status === "Progress") {
                // debugger;
                store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else {
            ErrorToast("Something Went Wrong")
        }
    }).catch((err) => {
        ErrorToast(`${err}"Something Went Wrong"`)
        store.dispatch(HideLoader())
    });
}


export function SummaryRequest() {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/taskStatusCount";
    axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            store.dispatch(SetSummary(res.data['data']))
        }
        else {
            ErrorToast("Something Went Wrong")
        }
    }).catch((err) => {
        ErrorToast(`${err}"Something Went Wrong"`)
        store.dispatch(HideLoader())
    });
}


export function DeleteRequest(id) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/deleteTask/" + id;
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            SuccessToast("Delete Successful")
            return true;
        }
        else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}


export function UpdateStatusRequest(id, status) {
    store.dispatch(ShowLoader())
    let URL = BaseURL + "/updateTaskStatus/" + id + "/" + status;
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            SuccessToast("Status Updated")
            return true;
        }
        else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}


// prifile Details


export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){

    store.dispatch(ShowLoader())

    let URL=BaseURL+"/profileUpdate";

    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)

            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}
