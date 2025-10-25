import { useState } from "react";
import { JobsSearch } from "./JobsSearch.jsx";
import { JobsListings } from "./JobsListings.jsx";
import { JobsPagination } from "./JobsPagination.jsx";

export const JobsMain = () => {
    const [filters, setFilters] = useState({
        location: '',
        nivel: '',
        technology: ''
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }))
    };

    console.log('filters:', filters);

    return (
        <main>
            <JobsSearch onFilterChage={handleFilterChange} />
            <JobsListings filtersJobs={filters} />            
            <JobsPagination />            
        </main>
    )
}

export default {JobsMain};