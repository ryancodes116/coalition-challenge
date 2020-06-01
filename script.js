const year = document.getElementById('year');
const mtn1 = document.getElementById('mountain1');
const mtn2 = document.getElementById('mountain2');
const schedule = document.getElementById('schedule-details');

// Dynamic year update
const currentYear = new Date().getFullYear();
year.innerText = currentYear;

// Handle Schedule Toggle
const toggleSchedule = (e) => {
  if (e.target.id === 'mountain1') {
    schedule.innerHTML = `
    <ul class='schedule-list'>
    <li>25 Nov 2016</li>
    <li>28 Nov 2016</li>
    <li>18 Dec 2016</li>
    <li>7 Jan 2017</li>
  </ul>
  <ul class='schedule-list'>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
  </ul>
    `;
  } else {
    schedule.innerHTML = `
    <ul class='schedule-list'>
    <li>15 Feb 2017</li>
    <li>21 Feb 2017</li>
    <li>13 Mar 2017</li>
    <li>3 Apr 2018</li>
  </ul>
  <ul class='schedule-list'>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
  </ul>
    `;
  }
};

// Add click event for schedule tabs
mtn1.addEventListener('click', toggleSchedule);
mtn2.addEventListener('click', toggleSchedule);
