let interviewList = [];
let rejectedList = [];

let currentStatus = 'all';

let totalJobs = document.getElementById('totalCount');
let interview = document.getElementById('interviewCount');
let rejected = document.getElementById('rejectedCount');
let availableJobs = document.getElementById('availableCount');

const btnAllFilter = document.getElementById('btn-all-filter');
const btnInterviewFilter = document.getElementById('btn-interview-filter');
const btnRejectFilter = document.getElementById('btn-reject-filter');


const allJobCard = document.getElementById('job-cards');
const mainContainer = document.querySelector('main');
const filteredJob = document.getElementById('filtered-job');

// interviewList.push('job-card-1');

function jobsCount() {
    totalJobs.innerText = allJobCard.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
    let availableJobsCount = Number(allJobCard.children.length) - Number(interviewList.length) - Number(rejectedList.length);

    // availableJobs.innerText = `${availableJobsCount} of ${totalJobs.innerText} Jobs`;
    availableJobs.innerText = `${availableJobsCount} of ${Number(allJobCard.children.length)} Jobs`;
    
}
jobsCount();

function toggleStyle(id) {
    btnAllFilter.classList.remove('bg-blue-600', 'text-white');
    btnInterviewFilter.classList.remove('bg-blue-600', 'text-white');
    btnRejectFilter.classList.remove('bg-blue-600', 'text-white');

    btnAllFilter.classList.add('bg-[#FFFFFF]', 'text-black');
    btnInterviewFilter.classList.add('bg-[#FFFFFF]', 'text-black');
    btnRejectFilter.classList.add('bg-[#FFFFFF]', 'text-black');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-[#FFFFFF]', 'text-black');
    selected.classList.add('bg-blue-600', 'text-white');

    if (id == 'btn-interview-filter') {
        allJobCard.classList.add('hidden');
        filteredJob.classList.remove('hidden');
        renderInterview();
    } else if (id == 'btn-all-filter') {
        allJobCard.classList.remove('hidden');
        filteredJob.classList.add('hidden');
    } else if (id == 'btn-reject-filter') {
        allJobCard.classList.add('hidden');
        filteredJob.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click', function (event) {
   
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const jobDescription = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = "Interview";

        const jobInfo = {
            companyName,
            jobName,
            jobType,
            status: "Interview",
            jobDescription
        }
        const companyInclude = interviewList.find(item => item.companyName == jobInfo.companyName);


        if (!companyInclude) {
            interviewList.push(jobInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != jobInfo.companyName);

        jobsCount();

        if (currentStatus == "btn-reject-filter") {
            renderRejected();
        }

        // renderInterview();

    } else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const jobDescription = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = "Rejected";

        const jobInfo = {
            companyName,
            jobName,
            jobType,
            status: "Rejected",
            jobDescription
        }
        const companyInclude = rejectedList.find(item => item.companyName == jobInfo.companyName);



        if (!companyInclude) {
            rejectedList.push(jobInfo);
        }
        interviewList = interviewList.filter(item => item.companyName != jobInfo.companyName);

        if (currentStatus == "btn-interview-filter") {
            renderInterview();
        }

        jobsCount();

    }
    // else if(event.target.classList.contains('delete-btn')){
    //     const parentNode = event.target.parentNode;
    //     // const card = btnDelete.closest(".job-card");
    //     const card = event.target.closest(".job-card");
    //     if(card){
    //         card.remove();
    //     }
    // }
})

function renderInterview() {
    filteredJob.innerHTML = '';

    for (let interviews of interviewList) {
        let div = document.createElement('div');
        div.className = "flex justify-between bg-[#FFFFFF] p-3 mb-5";
        div.innerHTML = `
        <div class="py-5">
                    <h3 class="company-name text-2xl font-bold">${interviews.companyName}</h3>
                    <p class="job-name mb-3">${interviews.jobName}</p>
                    <p class="job-type mb-3">${interviews.jobType}</p>
                    <p class="status w-[120px] bg-blue-600 text-white text-center p-1">${interviews.status}</p>
                    <p class="description mb-5">${interviews.jobDescription}</p>
                    <button class="interview-btn text-green-500 px-5 py-2 border border-green-500 cursor-pointer">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 px-5 py-2 border border-red-500 cursor-pointer">REJECTED</button>
                </div>
                <div>
                    <button class="delete-btn bg-gray-400 px-2 py-1">Delete</button>
                </div>
        `
        filteredJob.appendChild(div);
    }
}

function renderRejected() {
    filteredJob.innerHTML = '';

    for (let rejects of rejectedList) {
        let div = document.createElement('div');
        div.className = "flex justify-between bg-[#FFFFFF] p-3 mb-5";
        div.innerHTML = `
        <div class="py-5">
                    <h3 class="company-name text-2xl font-bold">${rejects.companyName}</h3>
                    <p class="job-name mb-3">${rejects.jobName}</p>
                    <p class="job-type mb-3">${rejects.jobType}</p>
                    <p class="status w-[120px] bg-blue-600 text-white text-center p-1">${rejects.status}</p>
                    <p class="description mb-5">${rejects.jobDescription}</p>
                    <button class="interview-btn text-green-500 px-5 py-2 border border-green-500 cursor-pointer">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 px-5 py-2 border border-red-500 cursor-pointer">REJECTED</button>
                </div>
                <div>
                    <button class="delete-btn bg-gray-400 px-2 py-1">Delete</button>
                </div>
        `
        filteredJob.appendChild(div);
    }
}

const jobContainer = document.getElementById('job-cards');

jobContainer.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        const removeJob = event.target.closest('.job-card');
        if (removeJob) {
            removeJob.remove();
            updateCount();
        }
    }
});

function updateCount() {
    
    const currentJobs = jobContainer.querySelectorAll('.job-card').length;
    totalJobs.innerText = currentJobs;
    
}
// updateCount();


    