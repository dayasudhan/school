var mongoose = require('mongoose');
//Schema
var ClassInfo = new mongoose.Schema({
    _id:String,
    section:String,
    schoolId:String,
    classteacher:String,
    examtimeTable:{
        examType:String,
        exam:[{subject_name:String, time:String, teacher:String}]
   },
    timeTable: {
        monday:[{subject_name:String, time:String, teacher:String}],
        tuesday:[{subject_name:String, time:String, teacher:String}],
        webnesday:[{subject_name:String, time:String, teacher:String}],
        thursday:[{subject_name:String, time:String, teacher:String}],
        friday:[{subject_name:String, time:String, teacher:String}],
        saturday:[{subject_name:String, time:String, teacher:String}]}
    });

//Model
var ClassInfoModel = mongoose.model( 'ClassInfo', ClassInfo );

module.exports = ClassInfoModel;