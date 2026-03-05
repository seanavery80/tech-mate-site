export default async function handler(req,res){

    const ip = req.query.ip;

    if(!ip){
        res.status(400).json({error:"IP required"});
        return;
    }

    const response = await fetch(`http://ip-api.com/json/${ip}`);

    const data = await response.json();

    res.status(200).json(data);

}