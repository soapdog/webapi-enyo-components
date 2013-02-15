enyo.kind({
    name: "webActivities.DialActivity",
    kind: "enyo.Component",
    statics: {
        dial: function(inNumber) {
            var openURL = new MozActivity({
                name: "dial",
                data: {
                    number: inNumber
                }
            });
        }
    }
});