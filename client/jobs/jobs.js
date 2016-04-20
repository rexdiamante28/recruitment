/**
 * Created by reinduque on 11/04/2016.
 */

Template.jobsForm.helpers({
    Company: function () {
        var company = {
            CompanyType:sessionStorage.getItem('user_CompanyType'),
            CompanyId:sessionStorage.getItem('user_CompanyId'),
            User:sessionStorage.getItem('user_Name'),
            CompanyName: sessionStorage.getItem('user_CompanyName')
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
                { key: 'createdBy', label: 'Created By' },
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