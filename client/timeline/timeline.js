Template.timeline.helpers({
    Event: function(){
        return Tracking.find({applicantID: applicantId});
    }
})