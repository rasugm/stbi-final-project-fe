import { Button } from '@/components/base';
import Icon from '@/components/base/Icon';
import { IMAGES, URL_WEB } from '@/configs';
import { env } from '@/configs/env';
import { ENVIRONMENT } from '@/constants';
import { Link } from 'react-router-dom';

function NotFound() {

    const navigationPath = `${location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV ? '/v4' : '' }`;

    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div>
                <img src={IMAGES.IL_PAGE_NOTFOUND} alt="not-found" className="w-60 h-60" />
            </div>
            <h6 className="text-center text-5xl">Halaman yang anda cari tidak ditemukan!</h6>
            <Button variant="solid" className="mt-4">
                <Link 
                    className="flex items-center" 
                    to={navigationPath}>
                    <Icon 
                        name="arrow-left"
                        className="mr-2"
                        size={20}
                    /> Kembali ke Home
                </Link>
            </Button>
        </div>
    );
}

export default NotFound;
