Template.sms.events({
    'submit form': function(event,template){
        event.preventDefault();

        var companies = Recipients.find({}).fetch();
        var message = template.find('#message').value;

        Meteor.call('sendsms',companies,message);

    },
    'click .all': function(event){
        var c = document.getElementById(event.currentTarget.id);
        if(c.checked){
            var company = Companies.findOne({_id: c.id});
            Recipients.insert({
                Name: company.Name,
                companyId: company._id,
                Group: company.Group,
                MobileNumber: company.MobileNumber
            })
        }else{
            Recipients.remove({
                companyId: c.id
            })
        }
    },
    'click .groups': function(event){
        var c = document.getElementById(event.currentTarget.id);
        var group = Groups.findOne({_id: c.id});

        if(c.checked){
            var company = Companies.find({Group: group.Name}).fetch();
            for(var a = 0; a<company.length; a++){
                var b = document.getElementById(company[a]._id);
                if(!b.checked){
                    b.click();
                }
            }
        }else{
            var company = Companies.find({Group: group.Name}).fetch();
            for(var a = 0; a<company.length; a++){
                var b = document.getElementById(company[a]._id);
                if(b.checked){
                    b.click();
                }
            }
        }
    },
    'click .clear': function(){
        var logs = SMSLogs.find({}).fetch();
        for(var a= 0; a<logs.length; a++){
            SMSLogs.remove({_id: logs[a]._id})
        }
    }
})

Template.sms.onCreated(function(){
    Recipients = new Mongo.Collection(null);
})

Template.sms.helpers({
    all: function(){
        return Companies.find({});
    },
    groups: function(){
        return Groups.find({});
    },
    recipients: function(){
        return Recipients.find({});
    },
    logs: function(){
        return SMSLogs.find({});
    }
})