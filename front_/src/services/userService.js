
export const userRegister = async ({username,email,password}) => {
    try {
        const response = await fetch("http://localhost:3000/api/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email , password})
        });
        console.log("response register service:" , response)
        if(!response.ok){
            throw new Error("HTTP Error ! status: ", response.status)
        }    

        return response.json();

    } catch (error) {
        console.log("Error despues de catch" , error)
    }
}

export const userLogin = async ({email,password}) => {
    try {
        const response = await fetch("http://localhost:3000/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email , password})
        });
        console.log("response login service: ", response)
        if(!response.ok){
            throw new Error("Error ! no se pudo logear")
        }    

        return response.json();

    } catch (error) {
        console.log("Error despues de catch" ,error)
    }
}

/*export const userVerify = async (bool) => {



}*/