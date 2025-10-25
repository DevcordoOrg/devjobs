export const JobsSearchFilters = ({onFilterJobChange}) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onFilterJobChange(name, value);
    };
    return (
        <div className="search-filters">
            <select name="technology" id="filter-technology" className="filter" onChange={handleChange}>
                <option value="">Tecnología</option>
                <option value="html">Html</option>
                <option value="react">React</option>
                <option value="vue">Vue.js</option>
                <option value="next">Next.js</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="nodejs">Node.js</option>
                <option value="kotlin">Kotlin</option>
                <option value="flutter">Flutter</option>
                <option value="xamarin">Xamarin</option>
                <option value="mysql">MySQL</option>
                <option value="mssql">MsSQL</option>
                <option value="postgresql">PostgreSQL</option>
                <option value="Oracle">Oracle</option>
                <option value="mongodb">MongoDB</option>
                <option value="redis">Redis</option>
                <option value="firebase">Firebase</option>
                <option value="itil">Itil</option>
                <option value="siem">SIEM</option>
            </select>

            <select name="location" id="filter-location" className="filter" onChange={handleChange}>
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="bogota">Bogotá</option>
                <option value="manizales">Manizales</option>
                <option value="medellin">Medellín</option>
                <option value="pereira">Pereira</option>
                <option value="armenia">Armenia</option>
                <option value="cali">Cali</option>
                <option value="cartagena">Cartagena</option>
                <option value="barranquilla">Barranquilla</option>
            </select>

            <select name="nivel" id="filter-experience-level" className="filter" onChange={handleChange}>
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Semi-senior</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
            </select>
        </div>
    )
}