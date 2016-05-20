Template.nav.helpers({
    User: function(){
        Meteor.subscribe('users');
        return Users.findOne({_id: sessionStorage.getItem('user_Id')});
    },
    CompanyType: function () {
        return sessionStorage.getItem('user_CompanyType');
    }
})

Template.nav.events({
    'click #log-out': function(){
        sessionStorage.removeItem('user_Id');
        sessionStorage.removeItem('user_Role');
        sessionStorage.removeItem('user_Name');
        sessionStorage.removeItem('user_Avatar');

        sessionStorage.removeItem('user_CompanyType');
        sessionStorage.removeItem('user_CompanyId');
        sessionStorage.removeItem('user_CompanyName');

        Router.go('/');
    }
})