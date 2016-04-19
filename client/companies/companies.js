
Template.companies.helpers({
    companies: function () {
        return {
            collection: Companies,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Company Name' },
                { key: 'companyStatus', label: 'Company Status' },
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
    }
})

Template.companyEdit.helpers({
    Company: function(){
        return Companies.findOne({_id:companyId});
    }
})