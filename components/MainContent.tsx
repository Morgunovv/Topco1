import { useQuery } from '@apollo/client';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { GET_MAINS } from '../lib/queries';

// Определим интерфейс для item
interface MainItem {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля, которые есть в ваших данных
    };
}

// Определим интерфейс для data
interface MainData {
    mains: {
        data: MainItem[];
    };
}

export function MainContent() {
    const { loading, error, data } = useQuery(GET_MAINS);

    if (loading) return <PlasmicComponent component="LoadingState" />;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div>
            {data.mains.data.map((item: MainItem) => (
                <PlasmicComponent
                    key={item.id}
                    component="ProjectCard"
                    componentProps={{
                        title: item.attributes.title,
                        description: item.attributes.description,
                        // другие пропсы
                    }}
                />
            ))}
        </div>
    );
} 