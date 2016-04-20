Template.refer.helpers({
    Companies: function(){
        return Companies.find({});
    }
})

Template.refer.events({
    'click .save':function(event){
        event.preventDefault();
        var searchIDs = $('#referModal input:checked').map(function(){
            return $(this).val();
        });

        var companies =  searchIDs.get();
        var referedto = "";
        for(var a = 0; a<companies.length; a++){
            referedto+= '<strong>* '+companies[a]+'</strong><br/>';
        }

        var applicant = Applicants.findOne({_id:applicantId});
        var details = "Refered to the following companies: <br/>";

        details+=referedto;

        Tracking.insert({
            applicantID: applicant._id,
            applicantName: applicant.name,
            details: details,
            user: sessionStorage.getItem('user_Name'),
            userAvatar: sessionStorage.getItem('user_Avatar'),
            date: new Date()
        })

        $('#referModal').modal('hide');
    }
})