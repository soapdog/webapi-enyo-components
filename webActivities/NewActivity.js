enyo.kind({
    name: "webActivities.NewActivity",
    kind: "enyo.Component",
    statics: {
       new: function(inData) {
            var newActivity = new MozActivity({
                name: "new",
                data: inData
            });
        }
    }
});