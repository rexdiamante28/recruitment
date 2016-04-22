StatusChange = new Mongo.Collection("statuschange");

var Schemas = {};

Schemas.StatusChange = new SimpleSchema({
    applicantID: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true,
            }
        }
    },

    statusId: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'select',
                options: function(){
                    return HiringStages.find({}).map(function (c) {
                        return {label: c.Name, value: c._id};
                    });
                }
            }
        }
    },

    statusName: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true
            }
        }
    },

    jobId: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'select',
                label: 'Company',
                options: function(){
                    return Jobs.find({}).map(function (c) {
                        return {label: c.jobTitle +' '+Companies.findOne({_id:c.companyId}).Name, value: c._id};
                    });
                }
            }
        }
    },

    jobName: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true
            }
        }
    },

    companyId: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true
            }
        }
    },

    companyName: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true
            }
        }
    },


    user: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true,
            }
        }
    },


    userAvatar: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true,
            }
        }
    },

    date: {
        type: Date,
        autoform: {
            afFieldInput: {
            }
        }
    },

    dateInserted: {
        type: Date,
        autoform: {
            afFieldInput: {
                value: new Date(),
                readonly:true
            }
        }
    }


});

StatusChange.attachSchema(Schemas.StatusChange);