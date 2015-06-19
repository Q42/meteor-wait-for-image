

var loaded = new ReactiveVar(false);

Template.waitForImage.onRendered(function() {

    var img = document.createElement('img');

    img.onload = function() {
        loaded.set(true);
    };

    img.src = this.data;
});

Template.waitForImage.helpers({
    loaded:  function() {
        return loaded.get();
    }
});
