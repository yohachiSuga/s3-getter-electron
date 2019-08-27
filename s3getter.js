var fs = require('fs')

var AWS = require('aws-sdk')
var credentials = new AWS.SharedIniFileCredentials({profile:'power-user'})
AWS.config.credentials = credentials;

s3 = new AWS.S3({apiVersion:'2006-03-01'})

var flag = true

setInterval(()=>{
    if(!flag){
        flag = true
        pic_name = "pic_0001.jpg"
    }else{
        flag = false
        pic_name = "pic_0002.jpg"
    }

    var bucketParams ={
        Bucket:'agl-demo',
        Key:pic_name
    }    

    console.log("test")
    s3.getObject(bucketParams,function(err,data) {
        if(err){
            console.log(err)
        }else{
            console.log("overwrite file") 
            fs.writeFileSync('pic.jpg',data.Body)
        }
    }); 
},1000)


