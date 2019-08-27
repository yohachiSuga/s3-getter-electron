var fs = require('fs')

var AWS = require('aws-sdk')
var credentials = new AWS.SharedIniFileCredentials({profile:'power-user'})
AWS.config.credentials = credentials;

s3 = new AWS.S3({apiVersion:'2006-03-01'})
var bucketParams ={
    Bucket:'agl-demo',
    Key:'pic_0001.jpg'
}

s3.getObject(bucketParams,function(err,data) {
    if(err){
        console.log(err)
    }else{        
        console.log(data.Body)
        fs.writeFileSync('pic.jpg',data.Body)
    }
}); 