AutoForm.hooks({
    insertCompany: {
        onSuccess: function (id,value) {
        }
    }
});

Template.companies.helpers({
    companies: function () {
        cCompanies = new Mongo.Collection(null);
        var companies = Companies.find({}).fetch();
        for(var a =0; a<companies.length; a++){
            cCompanies.insert({
                _id:companies[a]._id,
                Name: companies[a].Name,
                companyStatus: companies[a].companyStatus,
                jobRequest: Jobs.find({companyId:companies[a]._id, Status:'Open'}).count(),
                applicants: Applicants.find({applicantStatus:'Unprocessed',companyId:companies[a]._id}).count()
            })
        }

        return {
            collection: cCompanies,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Company Name' },
                { key: 'companyStatus', label: 'Company Status' },
                { key: 'jobRequest', label: 'Open Job Requests' },
                { key: 'applicants', label: 'Unprocessed Applicants' },
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/companyview/" + value + ">View</a>");
                    }
                }
            ]
        };
    }
})

Template.companyView.helpers({
    CompanyProfile: function(){
        return Companies.findOne({_id:companyId});
    },
    jobsdata: function(){
        return {
            collection: Jobs.find({companyId:companyId}),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'jobTitle', label: 'Job Title' },
                { key: 'requiredHires', label: 'Required' },
                { key: 'hiredApplicants', label: 'Hired' },
                { key: 'Status', label: 'Status' },
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/companyview/"+companyId+"/" + value + ">View</a>");
                    }
                }
            ]
        };
    }
})

Template.companyEdit.helpers({
    Company: function(){
        return Companies.findOne({_id:companyId});
    }
})
