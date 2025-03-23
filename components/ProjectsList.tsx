import * as React from "react";
import { DataCtxReader } from "@plasmicapp/strapi";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

interface Project {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля проекта
    };
}

export function ProjectsList() {
    return (
        <DataCtxReader>
            {(data: { projects?: { data: Project[] } }) => (
                <div>
                    {data.projects?.data.map((project: Project) => (
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
            )}
        </DataCtxReader>
    );
}

ProjectsList.displayName = 'ProjectsList'; 