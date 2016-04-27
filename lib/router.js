/**
 * Created by reinduque on 11/04/2016.
 */
Router.route('/', function () {
    this.render('main');
});

Router.route('/jobsNew', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        this.render('jobsNew');

        Meteor.subscribe('companies');
    }
});

Router.route('/jobs', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('jobs');

        Meteor.subscribe('jobs');
    }
});

Router.route('/jobs/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        var params = this.params; // { _id: "5" }
        jobID = params._id; // "5"
        this.render('jobsEdit');

        Meteor.subscribe('jobs');
    }
});

Router.route('/careers', function () {
    this.render('careers');
    Meteor.subscribe('jobs');
});

Router.route('/careerview/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('careerview');

    Meteor.subscribe('jobs');

});

Router.route('/careers/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('applyNow');

    Meteor.subscribe('jobs');
    Meteor.subscribe('images');
    Meteor.subscribe('files');
});

Router.route('/applicants', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('applicants');

        Meteor.subscribe('applicants');
    }
});

Router.route('/applicants/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        applicantId = this.params._id
        this.render('applicantResume');

        Meteor.subscribe('jobs');
        Meteor.subscribe('applicants');
        Meteor.subscribe('hiringstages');
        Meteor.subscribe('companies');
        Meteor.subscribe('statuschange');
        Meteor.subscribe('tracking');
        Meteor.subscribe('notes');
    }
});

Router.route('/applicantEdit/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        applicantId = this.params._id
        this.render('applicantEdit');

        Meteor.subscribe('jobs');
        Meteor.subscribe('applicants');
        Meteor.subscribe('hiringstages');
        Meteor.subscribe('companies');

    }
});

Router.route('/companies', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('companies');

        Meteor.subscribe('companies');
    }
});

Router.route('/companyNew', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        this.render('companyNew');
    }
});

Router.route('/companyView/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        companyId = this.params._id
        this.render('companyView');

        Meteor.subscribe('companies');
        Meteor.subscribe('jobs');
    }
})

Router.route('/companyView/:_id/:_id2', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        companyId = this.params._id
        jobId = this.params._id2
        this.render('subHiringStages');

        Meteor.subscribe('companies');
        Meteor.subscribe('jobs');
        Meteor.subscribe('hiringstages');
        Meteor.subscribe('applicants');
    }
})

Router.route('/companyView/:_id/:_id2/:_id3', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        companyId = this.params._id;
        jobId = this.params._id2;
        statusId = this.params._id3;

        this.render('subApplicants');

        Meteor.subscribe('companies');
        Meteor.subscribe('jobs');
        Meteor.subscribe('hiringstages');
        Meteor.subscribe('applicants');
    }
})

Router.route('/companyEdit/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        companyId = this.params._id
        this.render('companyEdit');

        Meteor.subscribe('companies');
    }
})

Router.route('/hiringStages', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('hiringStages');

        Meteor.subscribe('hiringstages');
    }
});


Router.route('/hiringStageNew', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        this.render('hiringStageNew');
    }
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

Router.route('/applicantnotes/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 1','Employee 2'])){
        applicantId = this.params._id
        this.render('applicantnotes');

        Meteor.subscribe('notes');
        Meteor.subscribe('applicants');
    }
})

Router.route('/login', function () {
    this.render('login');

    Meteor.subscribe('users');
});

Router.route('/accessDenied', function () {
    this.render('accessDenied');
});

Router.route('/dashboard', function () {
    this.render('dashboard');

    Meteor.subscribe('users');
    Meteor.subscribe('files');
});

Router.route('/thanks', function () {
    this.render('thanks');
});