/**
 * Created by reinduque on 11/04/2016.
 */

Applicants = new Mongo.Collection("Applicants");

var Schemas = {};

Schemas.Applicants = new SimpleSchema({
    avatar: {
        type: String,
        optional: true,
        autoform: {
            readOnly: true,
            defaultValue:"/defaultavatar.png"
        }
    },

    cfsId: {
        type: String,
        optional: true,
        autoform: {
            readOnly: true,
        }
    },

    dateApplied: {
        type: Date,
        label: "Application Date",
        autoform: {
            value: new Date(),
            readOnly: true
        }
    },

    positionApplied: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readOnly: true
            }
        }
    },

    name: {
        label: "Name",
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    sex: {
        type: String,
        autoform: {
            type: "select-radio",
            options: function () {
                return [
                    {label: "Male", value: "Male"},
                    {label: "Female", value: "Female"}
                ];
            }
        }
    },

    presentAddress: {
        label: "Present Address",
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    cellphoneNumber: {
        label: "Cellphone Number",
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },


    email: {
        label: "email",
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    civilStatus: {
        type: String,
        autoform: {
            type: "select-radio",
            options: function () {
                return [
                    {label: "Single", value: "Single"},
                    {label: "Married", value: "Married"},
                    {label: "Widow(er)", value: "Widow"}
                ];
            }
        }
    },

    dateOfBirth: {
        type: Date,
        autoform: {
            afFieldInput: {
                type: "date"
            }
        }
    },

    professionalExperience: {
        type: Array,
        optional:true
    },

    "professionalExperience.$": {
        type: Object
    },

    "professionalExperience.$.Position": {
        type: String,
        label: "Position"
    },

    "professionalExperience.$.Company": {
        type: String,
        label: "Company"
    },

    "professionalExperience.$.From": {
        type: Date
    },

    "professionalExperience.$.To": {
        type: Date,
        optional: true
    },

    "professionalExperience.$.DutiesAndResponsibilities": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 3
            }
        }
    },

    "professionalExperience.$.ReasonForLeaving": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 3,
                optional: true
            }
        }
    },

    "professionalExperience.$.Salary": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    technicalSkills: {
        type: Array,
        optional: true
    },

    "technicalSkills.$": {
        type: Object
    },

    "technicalSkills.$.TechnicalSkill": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    educationalHistory: {
        type: Array
    },

    "educationalHistory.$": {
        type: Object
    },

    "educationalHistory.$.Level": {
        type: String,
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Vocational", value: "Vocational"},
                    {label: "Tertiary", value: "Tertiary"},
                    {label: "Master’s Degree", value: "Master’s Degree"},
                    {label: "Doctorate", value: "Doctorate"}
                ];
            }}

        },

        "educationalHistory.$.NameOfSchool": {
            type: String,
            optional: true,
            autoform: {
                afFieldInput: {
                    type: "text"
                }
            }
        },

        "educationalHistory.$.DegreeOrCourse": {
            type: String,
            optional: true,
            autoform: {
                afFieldInput: {
                    type: "text"
                }
            }
        },

        "educationalHistory.$.SchoolYear": {
            type: String,
            optional: true,
            autoform: {
                afFieldInput: {
                    type: "text"
                }
            }
        },

        "educationalHistory.$.HonorsOrScholarshipsReceived": {
            type: String,
            optional: true,
            autoform: {
                afFieldInput: {
                    type: "textarea",
                    rows: 3
                }
            }
        },

    characterReferences: {
        type: Array,
        optional:true
    },

    "characterReferences.$": {
        type: Object
    },

    "characterReferences.$.Name": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    "characterReferences.$.PositionTitle": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    "characterReferences.$.Company": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    "characterReferences.$.ProfessionalRelationship": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    "characterReferences.$.ContactNumber": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    applicantStatus: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly:true
            }
        }
    },

    companyAssignment: {
        optional: true,
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true
            }
        }
    },

    companyId: {
        optional: true,
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true
            }
        }
    },

    jobId: {
        optional: true,
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true
            }
        }
    },

    statusId: {
        optional: true,
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true
            }
        }
    }

});

Applicants.attachSchema(Schemas.Applicants);