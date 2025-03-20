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

// Определяем интерфейс для элемента данных
interface MainItem {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля, которые вы используете
    }
}

// Определяем интерфейс для структуры данных
interface MainData {
    mains: {
        data: MainItem[];
    }
}

export function MainContent() {
    // Приводим data к нужному типу
    const data: MainData = {
        mains: {
            data: [
                // Ваши данные здесь
                { id: 1, attributes: { title: 'Project 1' } },
                { id: 2, attributes: { title: 'Project 2' } }
            ]
        }
    };

    return (
        <div>
            {/* @ts-ignore */}
            {data.mains.data.map(item => (
                <PlasmicComponent
                    key={item.id}
                    component="ProjectCard"
                />
            ))}
        </div>
    );
} 