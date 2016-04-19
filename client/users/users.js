Template.adduser.onCreated(function(){
    Session.set('avatar','/defaultavatar.png');
})

Template.adduser.helpers({
    avatar: function(){
        if(Images.findOne({_id:Session.get('avatar')})){
            return Images.findOne({_id:Session.get('avatar')}).url();
        }
        else{
            return Session.get('avatar');
        }
    }
})

Template.useredit.helpers({
    userdoc: function(){
        return Users.findOne({_id:userId});
    },
    avatar: function(){
        var user = Users.findOne({_id:userId});
        if(user.cfsId===undefined){
            Session.set('avatar','/defaultavatar.png');
        }
        else{
            Session.set('avatar',Images.findOne({_id:user.cfsId}).url());
        }
    }
})



Template.users.helpers({
    users: function(){
        return {
            collection: Users,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'email', label: 'Email' },
                { key: 'name', label: 'Name', sortOrder: 1, sortDirection: 'ascending'},
                { key: 'mobileNumber', label: 'Mobile Number' },
                { key: 'Role', label: 'Role' },
                { key: 'Status', label: 'Status' },
                {
                    key: '_id',
                    label: 'View',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/useredit/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }
})