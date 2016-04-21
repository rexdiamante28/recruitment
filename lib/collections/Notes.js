Notes = new Mongo.Collection("notes");

var Schemas = {};

Schemas.Notes = new SimpleSchema({
    applicantID: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true,
            }
        }
    },

    commentedBy: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true,
            }
        }
    },


    avatar: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
                readonly: true,
            }
        }
    },

    comment: {
        optional: false,
        type: String,
        label: "Note",
        autoform: {
            afFieldInput: {
                type: "summernote"
            }
        }
    },

    date: {
        type: Date,
        autoform: {
            afFieldInput: {
                value: new Date(),
                readonly:true
            }
        }
    }


});

Notes.attachSchema(Schemas.Notes);