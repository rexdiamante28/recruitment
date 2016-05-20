Companies = new Mongo.Collection("companies");

var Schemas = {};

Schemas.Companies = new SimpleSchema({
    Name: {
        type: String,
        unique: true,
        label: "Company Name",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    ContactPerson: {
        type: String,
        label: "Contact Person",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    MobileNumber: {
        type: String,
        label: "Mobile Number",
        autoform: {
            afFieldInput: {
                type: "masked-input",
                mask: '+63 (000) 000-0000',
                maskOptions: {
                    placeholder: '(___) ___-____'
                }
            }
        }
    },

    Group: {
        type: String,
        label: "Group",
        autoform: {
            afFieldInput: {
                type: 'select',
                options: function(){
                    return Groups.find({}).map(function (c) {
                        return {label: c.Name, value: c.Name};
                    });
                }
            }
        }
    },

    Status: {
        type: String,
        autoform: {
            type: "select-radio",
            options: function () {
                return [
                    {label: "Lead", value: "Lead"},
                    {label: "Opportunity", value: "Opportunity"},
                    {label: "Customer", value: "Customer"}
                ];
            }
        }
    },



});

Companies.attachSchema(Schemas.Companies);