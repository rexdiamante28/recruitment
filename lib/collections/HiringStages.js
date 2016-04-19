HiringStages = new Mongo.Collection("hiringstages");

var Schemas = {};

Schemas.HiringStages = new SimpleSchema({
    Name: {
        type: String,
        unique: true,
        label: "Stage name",
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },

    Number: {
        type: Number,
        unique: true,
        min: 1,
        label: "Stage Number",
        autoform: {
            afFieldInput: {
                type: "number",
                value: 1
            }
        }
    },

    Description: {
        type: String,
        label: "Short Description about this stage",
        autoform: {
            afFieldInput: {
                type: "summernote",
            }
        }
    },

});

HiringStages.attachSchema(Schemas.HiringStages);