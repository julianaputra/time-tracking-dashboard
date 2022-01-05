let activities = [];
let activeTimeframe = "daily";
let activeFrame = "Day";

fetch("assets/json/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    activities = data;
    fetchActivity();
  });

let activityList = document.querySelector("#activity-list");
const dailyFilter = document.querySelector("#daily-filter");
const weeklyFilter = document.querySelector("#weekly-filter");
const monthlyFilter = document.querySelector("#monthly-filter");

dailyFilter.addEventListener('click', function() {
  activeTimeframe = "daily";
  activeFrame = "Day";
  this.classList.add("active");
  weeklyFilter.classList.remove("active");
  monthlyFilter.classList.remove("active");
  fetchActivity();
})
weeklyFilter.addEventListener('click', function() {
  activeTimeframe = "weekly";
  activeFrame = "Week";
  this.classList.add("active");
  dailyFilter.classList.remove("active");
  monthlyFilter.classList.remove("active");
  fetchActivity();
})
monthlyFilter.addEventListener('click', function() {
  activeTimeframe = "monthly";
  activeFrame = "Month";
  this.classList.add("active");
  dailyFilter.classList.remove("active");
  weeklyFilter.classList.remove("active");
  fetchActivity();
})

function fetchActivity() {
  activityList.innerHTML = ""

  activities.forEach((activity) => {

    let color = '';
    let icon = '';

    switch (activity.title) {
      case "Work":
        color = "hsl(15, 100%, 70%)";
        icon = "icon-work.svg"
        break;
      case "Play":
        color = "hsl(195, 74%, 62%)";
        icon = "icon-play.svg"
        break;
      case "Study":
        color = "hsl(348, 100%, 68%)";
        icon = "icon-study.svg"
        break;
      case "Exercise":
        color = "hsl(145, 58%, 55%)";
        icon = "icon-exercise.svg"
        break;
      case "Social":
        color = "hsl(264, 64%, 52%)";
        icon = "icon-social.svg"
        break;
      case "Self Care":
        color = "hsl(43, 84%, 65%)";
        icon = "icon-self-care.svg"
        break;
      default:
        color = "hsl(43, 84%, 65%)";
        icon = "icon-self-care.svg"
        break;
    }

    activityList.innerHTML += `<div class="activity-card" style="background-color: ${color}">
      <img
        class="activity-card__activity-icon"
        src="assets/img/${icon}"
        alt=""
      />
      <div class="activity-card__container">
        <div class="activity-card__head">
          <h2 class="activity-card__title">${activity.title}</h2>
          <a href="#" class="activity-card__ellipsis-icon">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="activity-card__body">
          <span class="activity-card__current"> ${activity.timeframes[activeTimeframe].current}hrs </span>
          <span class="activity-card__previous"> Last ${activeFrame} - ${activity.timeframes[activeTimeframe].previous}hrs </span>
        </div>
      </div>
    </div>`;
  });
}
