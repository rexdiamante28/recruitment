/**
 * Created by reinduque on 11/04/2016.
 */
Template.careerview.helpers({
   openJobs: function () {
       var docs= Jobs.find({_id:jobID});
       return docs;
   }
});

Template.careers.helpers({
    careers: function () {
        return {
            collection: Jobs,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'jobTitle', label: 'Job Title' },
                { key: 'requiredHires', label: 'Needed' },
                { key: 'hiredApplicants', label: 'Hired' },
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/careerview/" + value + ">View</a>");
                    }
                }
            ]
        };
    }
});


Template.applyNow.helpers({
    avatar : function(){
        if(Images.findOne({_id:Session.get('avatar')})){
            return Images.findOne({_id:Session.get('avatar')}).url();
        }
        else{
            return Session.get('avatar');
        }
    }
})

Template.applyNow.onCreated(function(){
    Session.set('avatar','/defaultavatar.png');
})

Template.applyNow.onRendered(function (){
    var doc = Jobs.findOne(jobID);
    document.getElementsByName("positionApplied").item(0).value = doc.jobTitle;
    document.getElementsByName("applicantStatus").item(0).value = "Unprocessed";
    document.getElementsByName("applicantStatus").item(0).readOnly = true;

    $('#professionalExperience').hide();
    $('#technicalSkills').hide();
    $('#educationalHistory').hide();
    $('#characterReferences').hide();
})

Template.applyNow.events({
    'click #to1': function(event){
        $('#personalInformation').show();
        $('#professionalExperience').hide();
    },
    'click #to2': function(event){
        $('#personalInformation').hide();
        $('#technicalSkills').hide();
        $('#professionalExperience').show();
    },
    'click #to3': function(event){
        $('#technicalSkills').show();
        $('#professionalExperience').hide();
        $('#educationalHistory').hide();
    },
    'click #to4': function(event){
        $('#educationalHistory').show();
        $('#technicalSkills').hide();
        $('#characterReferences').hide();
    },
    'click #to5': function(event){
        $('#characterReferences').show();
        $('#educationalHistory').hide();
    }
})


Template.imageModal.events({
    'change #imagePicker': function(event){
        var f = event.target.files[0];
        var fr = new FileReader();

        fr.onload = function(ev2) {
            $('#avatar-image').attr('src', ev2.target.result);
            $('#avatar-image').cropper({
                aspectRatio: 4/4
            });
            $('#avatar-image').cropper("replace", ev2.target.result);
        };

        fr.readAsDataURL(f);

        Session.set('allowSave', true);
    },
    'submit #imageModal': function(event){
        event.preventDefault();

        var canvas = $('#avatar-image').cropper("getCroppedCanvas");

        canvas.toBlob(function(blob) {
            Images.insert(blob, function (err, fileObj) {
                if(!err){
                    document.getElementsByName("cfsId").item(0).value = fileObj._id;
                    $('#modal-close').click();

                    Session.set('avatar',fileObj._id);
                }
            });
        }, "image/*", 1);

    }

})