Template.hiringStages.helpers({
    Stages: function(){
        return {
            collection: HiringStages.find({CompanyId: sessionStorage.getItem('user_CompanyId')}),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Status Name' , sortOrder: 1, sortDirection: 'ascending'},
                { key: 'RemoveFromPool', label: 'Remove From Pool'},
                { key: 'Description', label: 'Description',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/hiringstageedit/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }
})

Template.hiringStageNew.helpers({
    CompanyId: function(){
        return sessionStorage.getItem('user_CompanyId');
    }
})