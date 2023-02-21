import { projectsFake } from "../../../data";



const ProjectDetailPage = ( { projectid } ) =>
{
    // find
    const currentProject = projectsFake.find( ( project ) => project.id == projectid );
    if ( !currentProject ) return `Loading...`;
    return /*html*/ `<h1>ProjectDetailPage</h1>
        ${ currentProject.name }
        <hr />
        
        ${ currentProject.teams
            ? `
                    <h2>chi tiết</h2>
                    <ul>
                        ${ currentProject.teams.map( ( member ) => `<li>${ member.name }</li>` ).join( "" ) }
                    <ul>
                    `
            : ""
        }
        
    `;
};

export default ProjectDetailPage;
