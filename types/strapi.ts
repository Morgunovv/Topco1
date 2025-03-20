interface StrapiImage {
    data: {
        id: number;
        attributes: {
            url: string;
            width: number;
            height: number;
        };
    };
}

interface Project {
    id: number;
    attributes: {
        title: string;
        description: string;
        image: StrapiImage;
        createdAt: string;
        updatedAt: string;
    };
}

interface StrapiResponse<T> {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
} 