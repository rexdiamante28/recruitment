Groups = new Mongo.Collection("groups");

var Schemas = {};

Schemas.Groups = new SimpleSchema({
    Name: {
        type: String,
        unique: true,
        label: "Group Name",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    Description: {
        type: String,
        label: "Description",
        autoform: {
            afFieldInput: {
                type: "summernote"
            }
        }
    },

});

Groups.attachSchema(Schemas.Groups);