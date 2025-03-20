import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "tVrjFA7RVCG7zyycB4xXud",
            token: "GTRFxXOnFd2a1M3g9Hql8rpTTnXMbKQGvJhPwQVrWb2ChqeAJW5Wjy4gbeusvolZHoWmG3GkHkCd5zDz8vgQ"
        }
    ]
});

export function MainContent() {
    // Здесь можно использовать обычные данные или другой способ получения данных
    const mockData = [
        { id: 1, attributes: { title: 'Project 1', description: 'Description 1' } },
        { id: 2, attributes: { title: 'Project 2', description: 'Description 2' } }
    ];

    return (
        <div>
            {mockData.map(item => (
                <PlasmicComponent
                    key={item.id}
                    component="ProjectCard"
                />
            ))}
        </div>
    );
} 