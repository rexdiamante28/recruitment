/**
 * Created by reinduque on 11/04/2016.
 */
Router.route('/', function () {
    this.render('main');
});

Router.route('/users', function () {
    if(ValidateAccess(['Administrator'])){
        this.render('users');

        Meteor.subscribe('users');
    }
});

Router.route('/adduser', function () {
    if(ValidateAccess(['Administrator'])){
        this.render('adduser');

        Meteor.subscribe('images');
    }
});

Router.route('/useredit/:_id', function () {
    if(ValidateAccess(['Administrator'])){
        userId = this.params._id
        this.render('useredit');

        Meteor.subscribe('users');
    }
})


Router.route('/login', function () {
    this.render('login');

    Meteor.subscribe('users');
});

Router.route('/dashboard', function () {
    this.render('dashboard');
});

Router.route('/groups', function () {
    this.render('groups');
});

Router.route('/newgroup', function () {
    this.render('newgroup');
});

Router.route('/leads', function () {
    this.render('leads');
});

Router.route('/opportunities', function () {
    this.render('opportunities');
});

Router.route('/customers', function () {
    this.render('customers');
});

Router.route('/newlead', function () {
    this.render('newlead');
});
Router.route('/sms', function () {
    this.render('sms');
});

Router.route('/companyedit/:_id', function () {
    var params = this.params;
    compId = params._id;
    this.render('companyedit');
});