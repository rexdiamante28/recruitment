Template.nav.helpers({
    User: function(){
        return Users.findOne({_id: sessionStorage.getItem('user_Id')});
    }
})

Template.nav.events({
    'click #log-out': function(){
        sessionStorage.removeItem('user_Id');
        sessionStorage.removeItem('user_Role');
        sessionStorage.removeItem('user_Name');
        sessionStorage.removeItem('user_Avatar');

        Router.go('/');
    }
})