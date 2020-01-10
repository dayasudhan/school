var mongoose = require('mongoose');
//Schema
var StudentSchema = new mongoose.Schema({
	id:String,
    phone:Number,
    email:String,
    name:String,
    standard:String,
    section:String,
    gender:String,
    dob:String,
    bloodGroup:String,
    isDayschooler:String,
    admissionNo:String,
    admissionDate:String,
    schoolId:String,
    scoolusername:String,
    // result:{exam_title:String,
    //         score:[{subject_name:String, date_of_exam:String,marks:Number,
    //             max_marks:Number,status:String,action:String,grade:String,time:String}]
    // },
    result:[{exam_title:String,
             subject_name:String, date_of_exam:String,marks:Number,
                max_marks:Number,status:String,action:String,grade:String,time:String}]
 ,
    attendence:[{ 
        date:Date,
        present:Number
    }],
    // marks_sheet:{

    // },
    exam_shedule:{

    },
    holiday_list:{

    },
    notifications:
    {

    },
    address:{
        label:String, 
		addressLine1:String,
		addressLine2:String,
		street:String, 
		LandMark:String, 
		areaName:String,
		city:String, 
		zip:String, 
		latitude:Number,
        longitude:Number 
    },
    parent_info:
        {
        father_name:String,
        father_phone:Number,
        father_email:String,
        father_profession:String,
        mother_name:String,
        mother_phone:Number,
        mother_email:String,
        mother_profession:String
        },

   });


//Model
var StudentModel = mongoose.model( 'StudentSchema', StudentSchema );

module.exports = StudentModel;