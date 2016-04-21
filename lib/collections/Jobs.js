/**
 * Created by reinduque on 11/04/2016.
 */

Jobs = new Mongo.Collection("Jobs");

var Schemas = {};

Schemas.Jobs = new SimpleSchema({

    createdBy: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true
            }
        }
    },


    companyId: {
        type: String,
        autoform: {
            type: "select",
            label:'Company',
            options: function(){
                return Companies.find({}).map(function (c) {
                    return {label: c.Name, value: c._id};
                });
            }
        }
    },

    companyName: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    jobTitle: {
        type: String,
        label: "Job Title",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    jobDescription: {
        type: String,
        label: "Job Description",
        autoform: {
            afFieldInput: {
                type: 'summernote'
            }
        }
    },

    jobQualification: {
        type: String,
        label: "Job Qualification",
        autoform: {
            afFieldInput: {
                type: 'summernote'
            }
        }
    },

    requiredHires: {
        type: Number,
        label: "Required Hires",
        min: 0,
        autoform: {
            afFieldInput: {
                type: "number"
            }
        }
    },

    hiredApplicants: {
        type: Number,
        label: "Hired Applicants",
        min: 0,
        autoform: {
            afFieldInput: {
                type: "number"
            }
        }
    },

    Status: {
        type: String,
        autoform: {
            type: "select",
            value: 'Unconfirmed',
            options: function () {
                return [
                    {label: "Open", value: "Open"},
                    {label: "Closed", value: "Closed"}
                ];
            }
        }
    }


    
});

Jobs.attachSchema(Schemas.Jobs);