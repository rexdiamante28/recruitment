Template.jobsForm.events({
    'change .form-control': function(event){
        if(event.currentTarget.name==='companyId'){
            $('#insertJobForm input[name=companyName]').val(Companies.findOne({_id:event.currentTarget.value}).Name);
        }
    }
})

Template.jobsEditForm.events({
    'change .form-control': function(event){
        if(event.currentTarget.name==='companyId'){
            $('#updateJobForm input[name=companyName]').val(Companies.findOne({_id:event.currentTarget.value}).Name);
        }
    }
})



Template.jobsForm.helpers({
    Company: function () {
        var company = {
            User:sessionStorage.getItem('user_Name')
        }
        return company;
    }
})

Template.jobs.helpers({
    jobs: function () {
        return {
            collection: Jobs,
            rowsPerPage: 30,
            showFilter: true,
            fields: [
                { key: 'jobTitle', label: 'Job Title' },
                { key: 'companyName', label: 'Company' },
                { key: 'requiredHires', label: 'Required Hires' },
                { key: 'hiredApplicants', label: 'Hired Applicants' },
                { key: 'Status', label: 'Status',  },
                {
                    key: '_id',
                    label: 'Edit',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/jobs/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }
});

Template.jobsEdit.helpers({
    thisDoc: function () {
        var doc=  Jobs.findOne(jobID);
        return doc;
    }
})

Template.jobsEditForm.helpers({
    thisDoc: function () {
        var doc=  Jobs.findOne(jobID);
        return doc;
    }
})