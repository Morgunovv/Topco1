interface MainItem {
    id: string | number;
    attributes: {
        // добавьте здесь все поля, которые вы используете из item.attributes
        title?: string;
        description?: string;
        // ... другие поля
    }
}

// В компоненте:
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