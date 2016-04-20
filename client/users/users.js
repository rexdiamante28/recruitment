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
    },
    Company: function(){
        var Company = {
            companyId: sessionStorage.getItem('user_CompanyId'),
            companyName: sessionStorage.getItem('user_CompanyName')
        }
        return Company;
    }
})

Template.adduser.events({
    'click .company-radio': function(event){
        $('input[name=companyName]').val(Companies.findOne({_id:event.currentTarget.value}).Name);
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
                { key: 'name', label: 'Name'},
                { key: 'companyName', label: 'Company' ,sortOrder: 1, sortDirection: 'ascending' },
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