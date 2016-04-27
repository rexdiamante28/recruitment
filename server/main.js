Meteor.publish('applicants',function(){
    return Applicants.find({});
})

Applicants.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('companies',function(){
    return Companies.find({});
})

Companies.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

//temporary publications file. It publishes everything without filter

Meteor.publish('hiringstages',function(){
    return HiringStages.find({});
})

HiringStages.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('images',function(){
    return Images.find({});
})

Images.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    update: function () {
        return true;
    }
});

Meteor.publish('jobs',function(){
    return Jobs.find({});
})

Jobs.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('notes',function(){
    return Notes.find({});
})

Notes.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('statuschange',function(){
    return StatusChange.find({});
})

StatusChange.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('tracking',function(){
    return Tracking.find({});
})

Tracking.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('users',function(){
    return Users.find({});
})

Users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});


Meteor.publish('files',function(){
    return Files.find({});
})