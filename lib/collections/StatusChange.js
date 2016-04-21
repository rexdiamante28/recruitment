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

    status: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'select',
                options: function(){
                    return HiringStages.find({}).map(function (c) {
                        return {label: c.Name, value: c.Name};
                    });
                }
            }
        }
    },

    companyId: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'select',
                label: 'Company',
                options: function(){
                    return Companies.find({}).map(function (c) {
                        return {label: c.Name, value: c._id};
                    });
                }
            }
        }
    },

    companyName: {
        type: String,
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