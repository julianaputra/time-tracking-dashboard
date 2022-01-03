fetch("assets/json/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let activities = data;

    console.log(activities);
  });
