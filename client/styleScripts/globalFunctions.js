manageCookie = function(){
    var cookie = getCookie('temp_session');
    if(cookie == ""){
        var tempsession = TempSessions.insert({
           date: new Date()
        });
        setCookie('temp_session',tempsession,2913795);
    }
}

setCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


ValidateAccess = function(allowedRoles){
    if(sessionStorage.getItem('user_Id')){
        var role = sessionStorage.getItem('user_Role');
        var valid = false;
        for(var a =0; a <allowedRoles.length; a++){
            if(role == allowedRoles[a]){
                valid = true;
            }
        }
        if(valid){
            return true;
        }
        else{
            Router.go('/accessDenied');
            return false;
        }
    }
    else{
        Router.go('/login');
        return false;
    }
}

FormatDate = function(date,format){
    return moment(date).format(format);
}
GetAge = function(birthday){
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}