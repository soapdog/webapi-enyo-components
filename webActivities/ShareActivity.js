enyo.kind({
    name: "webActivities.ShareActivity",
    kind: "enyo.Component",
    statics: {
        shareURL: function(inURL) {
            var openURL = new MozActivity({
                name: "share",
                data: {
                    number: 1,
                    url: inURL
                }
            });
        },
        shareBlob: function(inBlob, inMime) {
            var blob = new Blob([inBlob], {type: inMime});
            var sharingImage = new MozActivity({
                name: "share",
                data: {
                    //type: "image/png",
                    number: 1,
                    blobs: blob
                }
            });
        }
    }
});