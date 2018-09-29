var mongoose=require('mongoose');

//schema
var userSchema =mongoose.Schema({
    username:{
        type:String,
        index:true
            },
    password:{type:String},
    email:{type:String},
    name:{type:String}
});

// export model
module.exports=mongoose.model('usermodel',userSchema);
