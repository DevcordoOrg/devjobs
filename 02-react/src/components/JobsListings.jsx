import { JobCard } from "./JobCard";
import data from "../data.json";
import { useState } from "react";

export const JobsListings = ({filtersJobs}) => {
    const [jobsAplicados, setJobsAplicados] = useState(new Set());

    const handleAplicarJob = (jobId) => {
        const jobsAplicadosActuales = new Set(jobsAplicados);
        jobsAplicadosActuales.has(jobId) ? jobsAplicadosActuales.delete(jobId) : jobsAplicadosActuales.add(jobId);
        setJobsAplicados(jobsAplicadosActuales);

        console.log('Job aplicado:', jobId);
    };

    console.log(jobsAplicados)

    const filteredJobs = data.filter((job) => {
        const matchLocation = filtersJobs.location === '' || job.data.modalidad === filtersJobs.location;
        const matchNivel = filtersJobs.nivel === '' || job.data.nivel === filtersJobs.nivel;
        const matchTechnology = filtersJobs.technology === '' || job.data.technology === filtersJobs.technology;

        return matchLocation && matchNivel && matchTechnology;
    });

    return (
        <section>
            <h2>Resultados de la busqueda</h2>

            <div className="jobs-listings">
                {filteredJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        data={job.data}
                        titulo={job.titulo}
                        empresa={job.empresa}
                        ubicacion={job.ubicacion}
                        descripcion={job.descripcion}
                        isApplied={jobsAplicados.has(job.id)}
                        onAplicarJob={() => handleAplicarJob(job.id)}
                    />
                    
                ))}                
            </div>
        </section>
    )
}