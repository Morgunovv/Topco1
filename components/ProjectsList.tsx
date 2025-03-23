import * as React from "react";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { StrapiProvider, StrapiField } from "@plasmicpkgs/plasmic-strapi";

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
        <StrapiProvider>
            <StrapiField path="/api/projects">
                {(data: { projects?: { data: Project[] } }) => (
                    <div>
                        {data?.projects?.data?.map((project: Project) => (
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
            </StrapiField>
        </StrapiProvider>
    );
}

ProjectsList.displayName = 'ProjectsList'; 