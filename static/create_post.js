function faltu(result){
        alert(result);
        window.location.replace("/");
}

function post(event) {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var tags = document.getElementById('tags').value;
    var category = document.getElementById('category').value;
    var thumbnail = document.getElementById('thumbnail').value;
    var post = editor.codemirror.getValue();

    var settings = {
      "url": "https://thetechport.in/create_post_api/",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "description": description,
        "title": title,
        "tags": tags,
        "category": category,
        "thumbnail": thumbnail,
        "post": post
      }
    };
try {
  $.ajax(settings).done(function (response) {
      console.log(response);
      alert(response);
      window.location.replace("/");
    });
}
catch(err) {
  alert(err);
      window.location.replace("/");
}


//    var formdata = new FormData();
//    formdata.append("title", title);
//    formdata.append("description", description);
//    formdata.append("tags", tags);
//    formdata.append("category", category);
//    formdata.append("thumbnail", thumbnail);
//    formdata.append("post", post);
//        alert("Wait")
//        alert(formdata)
//
//    var requestOptions = {
//      method: 'POST',
//      body: formdata,
//      redirect: 'follow'
//    };
//fetch("https://thetechport.in/create_post_api/", requestOptions).then((response) => {
//  if (response.ok) {
//    alert("OK")
//    faltu("Success")
////    faltu(result)
//    return response.json();
//  } else {
//    alert("Error")
//    throw new Error('Something went wrong');
//  }
//})
//.then((responseJson) => {
//console.log(responseJson)
//  // Do something with the response
//  alert("Error")
//  alert(responseJson)
//  faltu(result)
//})
//.catch((error) => {
//  console.log(error)
//});
    }