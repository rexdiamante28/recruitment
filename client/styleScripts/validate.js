/**
 * Created by NicoloEngles on 1/27/2016.
 */

Validate = function validateNow(error,schema,template,successMessage){

    if(error){
        var count  = error.invalidKeys.length;
        var a=0;
        var errorMessage = "";
        for(a=0;a<count;a++)
        {
            errorMessage+= "&bull;&nbsp;&nbsp;"+schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"<br/>";

        }

        alertify.error(errorMessage);
        //template.find('#errorDiv').setAttribute('class','alert alert-danger alert-dismissable');
        //template.find('#errorDiv').innerHTML= errorMessage;
    }
    else
    {
        alertify.success(successMessage);
        //template.find('#errorDiv').setAttribute('class','alert alert-success');
        //template.find('#errorDiv').innerHTML=successMessage;
    }
}



Validate2 = function validateNow2(error,schema,template,successfunction,id){

    if(error){
        var count  = error.invalidKeys.length;
        var a=0;
        var errorMessage = "";
        for(a=0;a<count;a++)
        {
            errorMessage+= schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"\n";

        }

        alert(errorMessage);
    }
    else
    {
        //template.find('#errorDiv').setAttribute('class','alert alert-success');
        //template.find('#errorDiv').innerHTML=successMessage;
        successfunction(id);
    }
}



if(Meteor.isClient){

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

}

Authenticate =  function authenticateNow(){
    if(sessionStorage.getItem('userId')==null){
        Router.go('/');
    }
}

Logout = function logoutNow(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('adminId');

    Authenticate();
}



ConfirmActionDelete = function confirmAction(id,collectionName){
    var result = confirm("Are you sure you want to deletre this record?");
    if (result) {
        collectionName.remove({_id:id});
    }
}

Goto = function goto(route){
    Router.go(route);
}
