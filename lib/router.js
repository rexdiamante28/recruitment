/**
 * Created by reinduque on 11/04/2016.
 */
Router.route('/', function () {
    this.render('main');
});

Router.route('/jobsNew', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        this.render('jobsNew');
    }
});

Router.route('/jobs', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('jobs');
    }
});

Router.route('/jobs/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        var params = this.params; // { _id: "5" }
        jobID = params._id; // "5"
        this.render('jobsEdit');
    }
});

Router.route('/careers', function () {
    this.render('careers');
});

Router.route('/careerview/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('careerview');
});

Router.route('/careers/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('applyNow');
});

Router.route('/applicants', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('applicants');
    }
});

Router.route('/applicants/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        applicantId = this.params._id
        this.render('applicantResume');
    }
});

Router.route('/applicantEdit/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        applicantId = this.params._id
        this.render('applicantEdit');
    }
});

Router.route('/companies', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('companies');
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
    }
})

Router.route('/companyEdit/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 2'])){
        companyId = this.params._id
        this.render('companyEdit');
    }
})

Router.route('/hiringStages', function () {
    if(ValidateAccess(['Administrator','Employee 2','Employee 1'])){
        this.render('hiringStages');
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
    }
});

Router.route('/adduser', function () {
    if(ValidateAccess(['Administrator'])){
        this.render('adduser');
    }
});

Router.route('/useredit/:_id', function () {
    if(ValidateAccess(['Administrator'])){
        userId = this.params._id
        this.render('useredit');
    }
})

Router.route('/applicantnotes/:_id', function () {
    if(ValidateAccess(['Administrator','Employee 1','Employee 2'])){
        applicantId = this.params._id
        this.render('applicantnotes');
    }
})

Router.route('/login', function () {
    this.render('login');
});

Router.route('/accessDenied', function () {
    this.render('accessDenied');
});