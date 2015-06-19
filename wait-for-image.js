

var loaded = new ReactiveVar(false);

Template.waitForImage.onRendered(function() {

    var img = document.createElement('img');

    img.onload = function() {
        loaded.set(true);
    };

    this.autorun(function() {
        var url = Template.currentData();
        if (url) {
            console.log(url);

            Meteor.setTimeout(function() {
                img.src = url;
            },17);
        }
    });
});

Template.waitForImage.helpers({
    loaded:  function() {
        return loaded.get();
    }
});
