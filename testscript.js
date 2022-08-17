require(["dojo/dom", "dojo/request", "dojo/json",],
    function(dom, request, JSON){
        var resultDiv = dom.byId("resultDiv");
        var resultPic = dom.byId("resultPic");

        request.get("https://jsonplaceholder.typicode.com/photos/6", {
            handleAs: "json"
        }).then(function(data){
            // Display data
            var info = "<p class='Title'>User ID</p>" + "<p class='Data'>" + data.id + "</p>" + 
            "<p class='Title'>Title</p>" + "<p class='Data'>" + data.title + "</p>"

            // Display image
            var pic = "<img src=" + data.url + ">"

            resultDiv.innerHTML = info;
            resultPic.innerHTML = pic;

        },
        function(error){
            // Display the error returned
            result.innerHTML = error;
        });
    }
    
);