Template.applicantnotes.helpers({
    commentor: function () {
        var user = {
            name: sessionStorage.getItem('user_Name'),
            avatar: sessionStorage.getItem('user_Avatar')
        }
        return user;
    },
    applicant: function () {
        return Applicants.findOne({_id:applicantId});
    },
    notes: function(){
        return Notes.find({applicantID: applicantId});
    }
})