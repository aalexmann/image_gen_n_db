function SearchPhotos(){
    let clientId = 'tkSEqmMA6oBopz6N2zHXWXuQkLpCUCY5qMF8h6E5Kts'
    let query = document.getElementById("imgSearch").value; 
    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;
  
    // make a request to URI
    blank = ` `
    $("#result").html(blank);
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function(data){
            // console.log(data) // Conveniently check how to access what from the response object
          data.results.forEach(photo => {
            let result = `
              <img src="${photo.urls.small}">
              <a href="${photo.links.download}
            `;
            $("#result").append(result);
            
          });
        })
  
  };
function openImgSearch(){
    let x = document.getElementById("unsplash");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    };
  };
