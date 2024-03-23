import { useMatches } from 'react-router-dom';

const removeSlug = (param: string) => {
    switch (param) {
    case 'idProduct':
        return 'Detail Product';
    case 'idBlog':
        return 'Detail Blog';
    case 'idEcosystem':
        return 'Detail Ecosystem';
    case 'idLayer':
        return 'Detail Product';
    case 'idVariant':
        return 'Detail Varian Product';
    case 'id':
        return 'Detail';
    case 'create':
        return 'Tambah';
    case 'edit':
        return 'Ubah';
    default:
        return param.split('-').join(' ');
    }
};

export const useBreadcrumb = () => {
    const router = useMatches();
    const generate = () => {
        const { pathname, params } = router.length > 0 ? router[1] : router[0];
        const entri = Object.entries(params);
        const pathnameArray = pathname.split('/').filter((item) => item);
        const path = pathname
            .split('/')
            .filter((x) => x !== '')
            .map((item, index) => {
                const findI = entri.find((p) => p[1] === item);
                return {
                    title: removeSlug(findI ? findI[0] : item),
                    path: '/' + pathnameArray.slice(0, index + 1).join('/'),
                };
            });
        return path;
    };

    return generate();
};
