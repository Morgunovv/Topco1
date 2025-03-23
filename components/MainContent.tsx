import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

// Определим интерфейс для item
interface MainItem {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля, которые есть в ваших данных
    };
}

interface MainContentProps {
    data: {
        mains: {
            data: MainItem[];
        };
    };
}

export function MainContent({ data }: MainContentProps) {
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

// Добавьте displayName для компонента
MainContent.displayName = 'MainContent'; 