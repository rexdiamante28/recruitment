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

    Description: {
        type: String,
        label: "Short Company description (Please provide complete company information such as contact numbers, email addresses and contact persons)",
        autoform: {
            afFieldInput: {
                type: "summernote",
            }
        }
    },

    companyStatus: {
        type: String,
        autoform: {
            type: "select-radio",
            options: function () {
                return [
                    {label: "Active", value: "Active"},
                    {label: "Inactive", value: "Inactive"}
                ];
            }
        }
    },



});

Companies.attachSchema(Schemas.Companies);