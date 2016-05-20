Template.dashboard.helpers({
    lead: function(){
        return Companies.find({Status:'Lead'}).count();
    },
    opportunity: function(){
        return Companies.find({Status:'Opportunity'}).count();
    },
    customer: function(){
        return Companies.find({Status:'Customer'}).count();
    }
})
