AutoForm.hooks({
    insertApplicantForm: {
        onSuccess: function (type,id) {
            Router.go('/thanks');

            var companyId = Jobs.findOne({_id:jobID}).companyId;

            Applicants.update({_id:id},{
                $set:{
                    companyId:companyId,
                    statusId:'null'
                }
            })
        }
    }
});



Template.careerview.helpers({
   openJobs: function () {
       var docs= Jobs.find({_id:jobID});
       return docs;
   }
});

Template.careers.helpers({
    careers: function () {
        return {
            collection: Jobs.find({Status: 'Open'}),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'jobTitle', label: 'Job Title' },
                {
                    key: 'jobDescription',
                    label: 'Job Description',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
                {
                    key: 'jobQualification',
                    label: 'Qualifications',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
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
    },
    jobId: function(){
        return jobID;
    },
    Data: function(){
        return Jobs.findOne({_id:jobID});
    },
    Resume: function(){
        if(Files.findOne({_id:Session.get('resume')})){
            return Files.findOne({_id:Session.get('resume')}).url();
        }
        else{
            return Session.get('resume');
        }
    }
})

Template.applyNow.onCreated(function(){
    Session.set('avatar','/defaultavatar.png');
    Session.set('resume','empty');
})

Template.applyNow.onRendered(function (){
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

Template.resumeModal.events({
    'submit form': function(event,template){
        event.preventDefault();
        var file = template.find('#file');

        var filename = file.files[0].name;
        filename =filename.split('.');

        if(filename.length===2){
            var exstension = filename[1];


            if(exstension==='pdf'|| exstension==='PDF'){
                Files.insert(file.files[0], function (err, fileObj) {
                    if(!err){
                        document.getElementsByName("attachmentId").item(0).value = fileObj._id;
                        $('#resumeModal').modal('hide');
                        Session.set('resume',fileObj._id);
                    }
                });
            }
            else
            {
                alert('Invalid File');
            }
        }
        else
        {
            alert('Invalid File');
        }


    }
})