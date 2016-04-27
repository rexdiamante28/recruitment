    Files = new FS.Collection("files", {
    //stores: [new FS.Store.FileSystem("productImages", {path: Meteor.absolutePath +"~/images/profile"})]
    stores: [new FS.Store.FileSystem("files", {path: Meteor.absolutePath +"/files"})]
});

Files.allow({
    'insert': function () {
        return true
    },
    'update': function () {
        return true
    },
    'remove': function () {
        return true
    },
    download:function(){
        return true;
    }
})