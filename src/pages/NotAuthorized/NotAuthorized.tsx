import { Button } from '@/components/base';
import Icon from '@/components/base/Icon';
import { IMAGES } from '@/configs';
import { WEB } from '@/constants';
import { Link } from 'react-router-dom';

function NotAuthorized() {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div>
                <img src={IMAGES.IL_PAGE_UNAUTHORIZED} alt="not-found" className="w-60 h-60" />
            </div>
            <h6 className="text-center text-5xl">Anda tidak diizinkan masuk halaman ini!</h6>
            <Button variant="solid" className="mt-4">
                <Link className="flex items-center" to={WEB.DASHBOARD}>
                    <Icon name="arrow-left" className="mr-2" size={20} /> Kembali ke Home
                </Link>
            </Button>
        </div>
    );
}

export default NotAuthorized;
