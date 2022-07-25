function faltu(result){
        console.log(result)
        alert(result);
        window.location.replace("/");
}

function update_post(event) {
    post = editor.codemirror.getValue();
    const data = {
        'title': document.getElementById('title').value,
        'description': document.getElementById('description').value,
        'tags': document.getElementById('tags').value,
        'category': document.getElementById('category').value,
        'thumbnail': document.getElementById('thumbnail').value,
        'post': post,
        'post_id': document.getElementById('post_id').value
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"description":data.description,"title":data.title,
                            "tags":data.tags,"category":data.category,"thumbnail":data.thumbnail,
                            "post":data.post,"post_id": data.post_id});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://thetechport.in/update_post_api/", requestOptions).then((response) => {
      if (response.ok) {
        faltu("Success")
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((responseJson) => {
    console.log(responseJson)
    })
    .catch((error) => {
      console.log(error)
    });
}