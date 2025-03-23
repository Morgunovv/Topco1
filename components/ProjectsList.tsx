import * as React from "react";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

interface Project {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля проекта
    };
}

interface ProjectsResponse {
    data: Project[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    };
}

export function ProjectsList() {
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data: ProjectsResponse = await response.json();
                setProjects(data.data || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error fetching projects');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!projects.length) {
        return <div>No projects found</div>;
    }

    return (
        <div>
            {projects.map((project) => (
                <PlasmicComponent
                    key={project.id}
                    component="ProjectCard"
                    componentProps={{
                        title: project.attributes.title,
                        description: project.attributes.description,
                        // другие пропсы
                    }}
                />
            ))}
        </div>
    );
}

ProjectsList.displayName = 'ProjectsList'; 