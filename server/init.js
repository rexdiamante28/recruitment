Meteor.startup(function(){
    if(!Users.findOne({})){
        Users.insert({
            avatar:'/defaultavatar.png',
            cfsId: 'asdasdasd',
            email: 'admin@admin.com',
            password: '1234',
            name: 'Administrator',
            mobileNumber: '0000-000-0000',
            Role: 'Administrator',
            Status: 'Active'
        })
    }
})