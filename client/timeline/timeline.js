Template.timeline.helpers({
    Event: function(){
        return Tracking.find({applicantID: applicantId},{sort:{date: -1}});
    }
})