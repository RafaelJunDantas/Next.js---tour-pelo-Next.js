import {useRouter} from 'next/router'; 
import Link from 'next/link';

export default function Post(){

    const router = useRouter();

    return (
        <div>
            id do post atual {router.query.id}
            <ul>
                <li>
                    <Link href='/'>
                        <a>Ir para home</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
