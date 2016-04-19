
Users = new Mongo.Collection("users");

var Schemas = {};

Schemas.Users = new SimpleSchema({

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

    email: {
        type: String,
        label: "Email Address",
        unique: true,
        autoform: {
            afFieldInput: {
                type: "text",
            }
        }
    },

    password: {
        type: String,
        label: "Password",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    name: {
        type: String,
        label: "Full Name",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    mobileNumber: {
        type: String,
        label: "Mobile Number",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    Role: {
        type: String,
        autoform: {
            type: "select-radio",
            value: "Administrator",
            options: function () {
                return [
                    {label: "Administrator", value: "Administrator"},
                    {label: "Employee 1", value: "Employee 1"},
                    {label: "Employee 2", value: "Employee 2"}
                ];
            }
        }
    },

    Status: {
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
    }



});

Users.attachSchema(Schemas.Users);