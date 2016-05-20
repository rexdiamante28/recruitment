Template.customers.helpers({
    settings: function(){
        return {
            collection: Companies.find({Status:"Customer"}),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Name' },
                { key: 'ContactPerson', label: 'Contact Person' },
                { key: 'MobileNumber', label: 'MobileNumber' },
                { key: 'Group', label: 'Group' },
                {
                    key: '_id',
                    label: 'Actions',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/companyedit/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }
})