import { useQuery } from '@apollo/client';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { GET_MAINS } from '../lib/queries';

export function MainContent() {
    const { loading, error, data } = useQuery(GET_MAINS);

    if (loading) return <PlasmicComponent component="LoadingState" />;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div>
            {data.mains.data.map(item => (
                <PlasmicComponent
                    key={item.id}
                    component="ProjectCard"
                    componentProps={{
                        text: item.attributes.Text,
                        // другие пропсы
                    }}
                />
            ))}
        </div>
    );
} 