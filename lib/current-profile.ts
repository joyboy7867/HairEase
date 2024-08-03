import { auth } from "@clerk/nextjs/server";

export const currentprofile=async()=>{
    const{userId}=auth()

    if(!userId){
        return null
    }else{
        return true
    }

}

