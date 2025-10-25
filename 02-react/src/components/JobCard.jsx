// import { useState } from "react";

export const JobCard = ({data,titulo, empresa, ubicacion, descripcion, hidden, isApplied, onAplicarJob}) => {
    const text = isApplied ? "¡Aplicado!" : "Aplicar";
    const buttonClass = isApplied ? "is-applied" : "";

    console.log('isHidden en JobCard:', hidden);

    return (
        <article
            className = {`job-listing-card ${hidden ? 'is-hidden' : ''}`}
            data-modalidad = {data?.modalidad}
            data-nivel = {data?.nivel}
            data-technology = {data?.technology}
        >
            <div>
                <h3>{titulo}</h3>
                <small>{empresa}. | {ubicacion}</small>
                <p>{descripcion}</p>
            </div>
            <button 
                disabled={isApplied}
                className={`button-apply-job ${buttonClass}`}
                onClick={onAplicarJob}
            >
                {text}
            </button>
        </article>
    )
}