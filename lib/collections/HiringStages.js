HiringStages = new Mongo.Collection("hiringstages");

var Schemas = {};

Schemas.HiringStages = new SimpleSchema({
    CompanyId: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly:true
            }
        }
    },

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

    RemoveFromPool: {
        type: String,
        autoform: {
            type:'select-radio',
            options: function () {
                return [
                    {label: "Yes", value: "Yes"},
                    {label: "No", value: "No"}
                ];
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