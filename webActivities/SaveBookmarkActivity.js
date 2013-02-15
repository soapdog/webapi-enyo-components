enyo.kind({
    name: "webActivities.SaveBookmarkActivity",
    kind: "enyo.Component",
    statics: {
        save: function(inData) {
            var newActivity = new MozActivity({
                name: "save-bookmark",
                data: inData
            });
        }
    }
});