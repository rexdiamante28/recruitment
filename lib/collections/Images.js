Images = new FS.Collection("images", {
    //stores: [new FS.Store.FileSystem("productImages", {path: Meteor.absolutePath +"~/images/profile"})]
    stores: [new FS.Store.FileSystem("images", {path: Meteor.absolutePath +"/images"})]
});

Images.allow({
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