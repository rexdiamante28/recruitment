Meteor.startup(function(){
    if(!Companies.findOne({})){
        var companyId = Companies.insert({
            Name: 'Capstone Solutions Inc',
            Description: 'Default Recruitment Company',
            CompanyType: 'Default',
            companyStatus: 'Active'
        })

        company = Companies.findOne({_id:companyId});

        Users.insert({
            avatar:'/defaultavatar.png',
            cfsId: 'asdasdasd',
            companyId: companyId,
            companyName: company.Name,
            email: 'admin@admin.com',
            password: '1234',
            name: 'Administrator',
            mobileNumber: '0000-000-0000',
            Role: 'Administrator',
            Status: 'Active'
        })
    }
})