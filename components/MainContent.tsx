import { useQuery } from '@apollo/client';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { GET_MAINS } from '../lib/queries';

interface MainItem {
    id: string | number;
    attributes: {
        // добавьте здесь все поля, которые вы используете из item.attributes
        title?: string;
        description?: string;
        // ... другие поля
    }
}

export function MainContent() {
    const { data } = useQuery(GET_MAINS);

    return (
        <div>
            {/* @ts-ignore */}
            {data.mains.data.map(item => (
                <PlasmicComponent
                    key={item.id}
                    component="ProjectCard"
                // ... остальные пропсы
                />
            ))}
        </div>
    );
} 