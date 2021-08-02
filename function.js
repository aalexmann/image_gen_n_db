'use strict'
import { createClient } from 'pexels';


function submitSearch(){
    $('.searchSubmit').on('submit', function(){
        event.preventDefault();
        
        let imgSearch = document.getElementById('imgSearch').value;

        getImage(imgSearch)
    });
}

// This function brings results of an image search.
function getImage(imgSearch){
    // let img = encodeURIComponent(imgSearch.trim());
    let pexelBaseURL = 'https://api.pexels.com/v1/';
    let pexelAPIKey = '563492ad6f917000010000016630ea7f6c8345739c700e1e6db3ac5b';

    const client = createClient('563492ad6f917000010000016630ea7f6c8345739c700e1e6db3ac5b');
    const query = imgSearch;

    client.photos.search({ query, per_page: 9 }).then(photos => {...});

    fetch(geoCodeURL)
    .then(response => response.json() )
    .then(responseJson => {
        let latt = responseJson.latt;
        let longt = responseJson.longt;
        getCityWeatherData(latt, longt, cityInput);
     })
     .catch(error => alert('Something went wrong!'));
}


// // This function brings results of an image search too.
// function getImage(imgSearch){
//     // let img = encodeURIComponent(imgSearch.trim());
//     let pexelBaseURL = 'https://api.pexels.com/v1/';
//     let pexelAPIKey = '563492ad6f917000010000016630ea7f6c8345739c700e1e6db3ac5b';

//     const client = createClient('563492ad6f917000010000016630ea7f6c8345739c700e1e6db3ac5b');
//     const query = document.getElementById('imgSearch').value;

//     import { createClient } from 'pexels';

//     const client = createClient('YOUR_API_KEY');

//     client.photos.curated({ per_page: 1 }).then(photos => {...});

//     fetch(geoCodeURL)
//     .then(response => response.json() )
//     .then(responseJson => {
//         let latt = responseJson.latt;
//         let longt = responseJson.longt;
//         getCityWeatherData(latt, longt, cityInput);
//      })
//      .catch(error => alert('Something went wrong! Make sure the city is spelled correctly, or try typing city name a different way. Sometimes the server gets too many requests right now, so just keep trying.'));
// }



// Adjusts current tempurature into Fahrenheit and displays it in the model page
function fillWeatherDetails(responseJson, cityInput){
    let displayTemp = ((responseJson.data[0].temp)*(9/5))+32;
    let temp = displayTemp.toFixed(2);
    $('#currentWeather').empty();
    $('#currentWeather').append(`
The current temperature in ${cityInput} is&nbsp;<span>${temp}°F</span>.
    `)
    $('#weatherMessage').empty();
    $('#weatherMessage').append(`
    Below are the hottest and coldest tempuratures for the months of July and January in ${cityInput}, so you can know what to expect!
    `)

    $('.cityOfChoice').empty();
    $('.cityOfChoice').append(`${cityInput}`);
    
}

//initiates webpage functions
$(function runIt() {
    $(document).ready();
    console.log('Locked n Loaded');
    submitSearch();
});



unsplash.search.photos("explore", 1, 1);
{
  "total": 3451,
  "total_pages": 3451,
  "results": [
    {
      "id": "eOLpJytrbsQ",
      "created_at": "2014-11-18T14:35:36-05:00",
      "width": 4000,
      "height": 3000,
      "color": "#A7A2A1",
      "likes": 286,
      "user": {
        "id": "Ul0QVz12Goo",
        "username": "ugmonk",
        "name": "Jeff Sheldon",
        "first_name": "Jeff",
        "last_name": "Sheldon",
        "portfolio_url": "http://ugmonk.com/",
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
          "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
          "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
        },
        "links": {
          "self": "https://api.unsplash.com/users/ugmonk",
          "html": "http://unsplash.com/@ugmonk",
          "photos": "https://api.unsplash.com/users/ugmonk/photos",
          "likes": "https://api.unsplash.com/users/ugmonk/likes"
        }
      },
      "urls": {
        "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
        "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
        "html": "http://unsplash.com/photos/eOLpJytrbsQ",
        "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
      }
    }
  ]
}