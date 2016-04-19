Template.login.events({
    'submit form': function(event,template){
        event.preventDefault();

        var email = template.find('#email').value;
        var password = template.find('#password').value;

        if(Users.findOne({email:email,password:password,Status:"Active"})){
            Router.go('/dashboard');

            var user = Users.findOne({email:email,password:password,Status:"Active"});
            sessionStorage.setItem('user_Role', user.Role);
            sessionStorage.setItem('user_Id', user._id);
            sessionStorage.setItem('user_Name', user.name);
            sessionStorage.setItem('user_Avatar', user.avatar);

            sessionStorage.setItem('user_CompanyType', Companies.findOne({_id: user.companyId}).Type);
            sessionStorage.setItem('user_CompanyId', user.companyId);
            sessionStorage.setItem('user_CompanyName', user.companyName);

        }
        else{
            alert("Invalid User");
        }
    }
})