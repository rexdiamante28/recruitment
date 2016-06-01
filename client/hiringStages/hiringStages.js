Template.hiringStages.helpers({
    Stages: function(){
        return {
            collection: HiringStages,
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


Template.subHiringStages.helpers({
    Stages: function(events){

        var data = new Mongo.Collection(null);
        var stages = HiringStages.find({}).fetch();


        for(var a=0; a<stages.length; a++){
            data.insert({
                _id: stages[a]._id,
                Name: stages[a].Name,
                Description: stages[a].Description,
                Applicants: Applicants.find({jobId:jobId,statusId:stages[a]._id}).count()
            })
        }

        return {
            collection: data,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'Name', label: 'Stage' , sortOrder: 1, sortDirection: 'ascending'},
                { key: 'Description', label: 'Description',
                    fn: function (value) {
                        return new Spacebars.SafeString(value);
                    }
                },
                { key: 'Applicants', label: 'Number of applicants'},
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/companyview/"+companyId+"/"+jobId+"/"+ value + ">View</a>");
                    }
                }
            ]
        };
    },
    Company: function(){
        return Companies.findOne({_id:companyId});
    },
    Job: function(){
        return Jobs.findOne({_id: jobId});
    }
})
