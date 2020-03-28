const activities = [
    {
        "activity": "Puzzle",
        "category": "entertainment",
        "time_hrs": [2, 4],
        "num_people": [
            1,
            5
        ],
        "materials": [
            "puzzle pieces"
        ],
        "URL": "https://www.usatoday.com/story/life/health-wellness/2020/03/16/coronavirus-quarantine-100-things-do-while-trapped-inside/5054632002/",
        "photo": "https://www.rd.com/wp-content/uploads/2020/01/GettyImages-87487497.jpg",
        "tags": ["collaborative", "fun", "family"]
    }
];

function maxTime(time_range) {
  return time_range[1]
}

function minTime(time_range) {
  return time_range[0]
}

function tags(tags){
  return `
    <h4> Tags:</h4>
    <ul class="tags-list">
      ${tags.map((tag) => `<li>${tag}</li>`).join('')}
    </ul>
  `
}

function activityTemplate(activity) {
  return `
<div class="activity">
  <img class="activity-photo" src="${activity.photo}">
  <h2 class=activity.activity>${activity.activity} <span class="category">(${activity.category})</span></h2>
<p><strong>Time:</strong> ${minTime(activity.time_hrs)} to ${maxTime(activity.time_hrs)} hours</p> 
${activity.tags ? tags(activity.tags) : ''}
</div>
`
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Activities (${activities.length} results)</h1>
${activities.map(activityTemplate).join('')}
<p class="footer"> These ${activities.length} activities were added recently. Check back soon for updates.
`