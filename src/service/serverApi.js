export default async function GetInfo(){
    try{
        return await fetch("https://my-json-server.typicode.com/LiorDavid1996/KindergartenAp/data").then(res => res.json());
    }
    catch(err){
        console.log(err);

    }
    finally{
    }
}
