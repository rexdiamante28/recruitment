UI.registerHelper('formatDate', function(date,format) {
    return moment(date).format(format);
});

UI.registerHelper('getAge', function(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
});

UI.registerHelper('eqauls', function(value1,value2) {
    return (value1===value2);
});

UI.registerHelper('inRole', function(allowedRoles) {
    if(sessionStorage.getItem('user_Id')){
        var role = sessionStorage.getItem('user_Role');
        var valid = false;
        var validRoles = allowedRoles.split(',');
        for(var a =0; a <validRoles.length; a++){
            if(role == validRoles[a]){
                valid = true;
            }
        }
        if(valid){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
});