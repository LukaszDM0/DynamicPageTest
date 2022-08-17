require(["dojo/dom", "dojo/request"],
    function(dom, request){
        var resultDiv = dom.byId("resultDiv");

        request.get("https://jsonplaceholder.typicode.com/photos/6", {
            handleAs: "json"
        }).then(function(data){
            // Display data
            var info = "<p class='Title'>User ID</p>" + "<p class='Data'>" + data.id + "</p>" + 
            "<p class='Title'>Title</p>" + "<p class='Data'>" + data.title + "</p>"

            // Display image
            //var pic = "<img src=" + data.url + ">"

            var old = resultDiv.innerHTML;
            resultDiv.innerHTML = info + old;

        },
        function(error){
            // Display the error returned
            resultDiv.innerHTML = error;
        });
    },
);

require(["dijit/form/Button", "dojo/dom", "dojo/request", "dojo/domReady!"], function(Button, dom, request) {
    var button = new Button({
        label: "Change picture",
        onClick: function(){ 
            
            
            var changePic = dom.byId("changePic");

        request.get("https://jsonplaceholder.typicode.com/photos/12", {
            handleAs: "json"
        }).then(function(data){
            
            // Change image
            var pic = data.url;
            changePic.src = pic

        },
        function(error){
            // Display the error returned
            changePic.innerHTML = error;
        });
    }
    }, "btn");

    button.startup();
});
