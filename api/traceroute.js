import { exec } from "child_process";

export default function handler(req, res){

    const host = req.query.host;

    if(!host){
        res.status(400).json({error:"Host required"});
        return;
    }

    exec(`traceroute ${host}`, (err, stdout, stderr)=>{

        if(err){
            res.status(500).json({error:stderr});
            return;
        }

        res.status(200).json({
            output: stdout
        });

    });

}