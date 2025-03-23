import { StrapiDataFetcher } from './StrapiDataFetcher';
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

export function MainContent() {
    return (
        <StrapiDataFetcher
            collection="mains"
            filters={{
                // ваши фильтры, если нужны
            }}
            sort={["createdAt:desc"]}
            pagination={{ page: 1, pageSize: 10 }}
        >
            {(data) => (
                <div>
                    {data?.data?.map((item: any) => (
                        <PlasmicComponent
                            key={item.id}
                            component="ProjectCard"
                            componentProps={{
                                title: item.attributes.title,
                                description: item.attributes.description,
                            }}
                        />
                    ))}
                </div>
            )}
        </StrapiDataFetcher>
    );
}

// Добавьте displayName для компонента
MainContent.displayName = 'MainContent'; 