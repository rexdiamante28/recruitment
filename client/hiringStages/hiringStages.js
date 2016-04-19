Template.hiringStages.helpers({
    Stages: function(){
        return {
            collection: HiringStages,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Status Name' },
                { key: 'Number', label: 'Status Number', sortOrder: 1, sortDirection: 'ascending'},
                { key: 'Description', label: 'Description',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
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