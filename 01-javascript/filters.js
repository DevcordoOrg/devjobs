// const filterLocation = document.querySelector("#filter-location");
// const filterLevel = document.querySelector("#filter-experience-level");
// const filterTechnology = document.querySelector("#filter-technology");
const filters = document.querySelectorAll(".filter");

// filterLocation.addEventListener("change", () => {
//     const jobs = document.querySelectorAll(".job-listing-card");
//     const selectedValue = filterLocation.value;

//     jobs.forEach(job => {
//         const modalidad = job.dataset.modalidad;
//         const isShown = selectedValue === '' || selectedValue === modalidad;

//         job.classList.toggle('is-hidden', !isShown);
//     })
// });

// filterLevel.addEventListener("change", () => {
//     const jobs = document.querySelectorAll(".job-listing-card");
//     const selectedValue = filterLevel.value;

//     jobs.forEach(job => {
//         const nivel = job.dataset.nivel;
//         const isShown = selectedValue === '' || selectedValue === nivel;

//         job.classList.toggle('is-hidden', !isShown);
//     })
// });

// filterTechnology.addEventListener("change", () => {
//     const jobs = document.querySelectorAll(".job-listing-card");
//     const selectedValue = filterTechnology.value;

//     jobs.forEach(job => {
//         const technology = job.dataset.technology;
//         const isShown = selectedValue === '' || selectedValue === technology;

//         job.classList.toggle('is-hidden', !isShown);
//     })
// });

filters.forEach(filter => {    
    filter.addEventListener("change", () => {
        const jobs = document.querySelectorAll(".job-listing-card");
        const selectedValue = filter.value;
        jobs.forEach(job => {
            const modalidad = job.dataset.modalidad;
            const nivel = job.dataset.nivel;
            const technology = job.dataset.technology;
            const isShown = selectedValue === '' || selectedValue === modalidad || selectedValue === nivel || selectedValue === technology;
    
            job.classList.toggle('is-hidden', !isShown);
        })
    })
});