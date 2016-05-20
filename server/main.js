Name = "";

Meteor.methods({
    sendsms :function(companies, message){
        var client = new Twilio({
            from: '(954) 621-1303',
            sid: 'ACacdf128d848310f9e5e6eb2250c1364d',
            token: 'd843d487c24d346e8d1f62cc837fa7de'
        });

        for(var a=0; a<companies.length; a++){
            Name = companies[a].Name
            client.sendSMS({
                to: companies[a].MobileNumber,
                body: message
            },function(error,response,name){
                if(error){
                    console.log(error.message);
                    SMSLogs.insert({
                        Status: 'false',
                        Message: 'Sending message to '+Name+  ' failed.'+error.message,
                        Date: new Date()
                    })
                }
                else{
                    console.log(response);
                    SMSLogs.insert({
                        Status: 'true',
                        Message: 'Sending message to '+Name+' succeeded.',
                        Date: new Date()
                    })
                }
            });
        }
}
})