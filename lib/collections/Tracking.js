Tracking = new Mongo.Collection("tracking");

var Schemas = {};

Schemas.Tracking = new SimpleSchema({
    applicantID: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true,
            }
        }
    },

    applicantName: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "text",
                readonly: true,
            }
        }
    },

    details: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text'
            }
        }
    },

    user: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        }
    },

    userAvatar: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'text'
            }
        }
    },

    date: {
        type: Date,
        autoform: {
            afFieldInput: {
                type: 'date'
            }
        }
    }


});

Tracking.attachSchema(Schemas.Tracking);