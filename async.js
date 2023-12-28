const {readFile,writeFile, read} = require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/newfile.txt','demo test ${first}, ${second}',(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('Done');
        })
    })
})