import { toast } from "react-toastify";


export const useToast =()=>{
    const successToast =(message : string)=>{
    toast.success(message);
    }

    const failedToast  = (message : string)=>{
        toast.error(message);

    }

    return {successToast , failedToast}
}