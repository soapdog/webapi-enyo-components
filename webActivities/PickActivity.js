enyo.kind({
    name: "webActivities.PickActivity",
    kind: "enyo.Component",
    published: {
        onsuccess: "",
        onerror: "",
        type: ""
    },
    pick: function(inSender, inEvent) {
        var pick = new MozActivity({
            name: "pick",
            data: {
                type: this.type
            }


        });

        var foo = this;

        pick.onsuccess = function() {
            console.log("pick success!! calling " + foo.onsuccess);
            var theresult = this.result;
            enyo.call(foo.owner, foo.onsuccess, [this.result]);
        };


        pick.onerror = function() {
            console.log("error on pick !!! calling " + foo.onerror);
            enyo.call(foo.owner, foo.onerror, [this.result]);
        };
    }
});

