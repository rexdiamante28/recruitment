/**
 * Created by reinduque on 11/04/2016.
 */

Jobs = new Mongo.Collection("Jobs");

var Schemas = {};

Schemas.Jobs = new SimpleSchema({
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

    requiredHires: {
        type: Number,
        label: "Required Hires",
        min: 0,
        autoform: {
            afFieldInput: {
                type: "number",
                value: 1
            }
        }
    },

    hiredApplicants: {
        type: Number,
        label: "Hired Applicants",
        min: 0,
        autoform: {
            afFieldInput: {
                type: "number",
                value: 0
            }
        }
    },

    Status: {
        type: String,
        autoform: {
            type: "select",
            value: "Open",
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