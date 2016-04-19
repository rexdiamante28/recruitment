Meteor.startup(function(){
    if(!Users.findOne({Role: 'Administrator'})){
        Users.insert({
            avatar:'/defaultavatar.png',
            cfsId: '',
            email: 'admin@admin.com',
            password: '1234',
            name: 'Administrator',
            mobileNumber: '0000-000-0000',
            Role: 'Administrator',
            Status: 'Active'
        })
    }
})