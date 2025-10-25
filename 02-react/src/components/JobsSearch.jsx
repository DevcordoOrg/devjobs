import { JobsSearchBar } from "./JobsSearchBar.jsx";
import { JobsSearchFilters } from "./JobsSearchFilters.jsx";

export const JobsSearch = ({onFilterChage}) => {

    const handleOnFilterChange = (filterName, value) => {
        onFilterChage(filterName, value);
    }

    return (
        <section className="jobs-search">
            <h1>Encuentra tu proximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>

            <form id="search-form" role="search">
                <JobsSearchBar />

                <JobsSearchFilters onFilterJobChange={handleOnFilterChange} />
            </form>
        </section>
    )
}