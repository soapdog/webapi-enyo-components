enyo.kind({
    name: "webActivities.ViewActivity",
    kind: "enyo.Component",
    statics: {
        viewURL: function(inURL) {
            var openURL = new MozActivity({
                name: "view",
                data: {
                    type: "url", // Possibly text/html in future versions
                    url: inURL
                }
            });
        }
    }
});