Template.dashboard.helpers({
    Data: function(event){
        var data = new Mongo.Collection(null);
        var companies = Companies.find({}).fetch();

        for(var a=0; a<companies.length; a++){
            var posts = [];
            var jobs = Jobs.find({companyId:companies[a]._id}).fetch();

            for(var b =0;b<jobs.length; b++){
                posts.push({_id:jobs[b]._id, name:jobs[b].jobTitle})
            }

            data.insert({
                _id:companies[a]._id,
                name: companies[a].Name,
                description: companies[a].Description,
                status: companies[a].companyStatus,
                jobPost: posts
            })
        }
        return data.find({});
    }
})