SMSLogs = new Mongo.Collection("smslogs");

var Schemas = {};

Schemas.SMSLogs = new SimpleSchema({
    Status: {
        type: String
    },
    Message: {
        type: String
    },
    Date: {
        type: Date
    }

});

SMSLogs.attachSchema(Schemas.SMSLogs);