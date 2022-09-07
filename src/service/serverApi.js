export default async function GetInfo(){
    try{
        return await fetch("https://my-json-server.typicode.com/sara-likaount/json/Teachers").then(res => res.json());
    }
    catch(err){
        console.log(err);

    }
    finally{
    }
}
