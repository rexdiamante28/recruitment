Template.login.events({
    'submit form': function(event,template){
        event.preventDefault();

        var email = template.find('#email').value;
        var password = template.find('#password').value;

        if(Users.findOne({email:email,password:password,Status:"Active"})){
            Router.go('/careers');

            var user = Users.findOne({email:email,password:password,Status:"Active"});
            sessionStorage.setItem('user_Role', user.Role);
            sessionStorage.setItem('user_Id', user._id);
            sessionStorage.setItem('user_Name', user.name);
            sessionStorage.setItem('user_Avatar', user.avatar);
        }
        else{
            alert("Invalid User");
        }
    }
})