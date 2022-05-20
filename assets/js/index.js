$("#add_user").on('submit', (event) => {
    alert("Data Inserted Successfully!");
  });


$("#update_user").on('submit', (event) =>{
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array)
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})



