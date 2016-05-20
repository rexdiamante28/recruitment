Template.groups.helpers({
    users: function(){
        return {
            collection: Groups,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Name' },
                {
                    key: 'Description',
                    label: 'Actions',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
                {
                    key: '_id',
                    label: 'Actions',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/useredit/" + value + ">Edit</a> | <a href=/useredit/" + value + ">Delete</a>");
                    }
                }
            ]
        };
    }
})