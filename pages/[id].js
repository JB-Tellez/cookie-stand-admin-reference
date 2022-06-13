import { useRouter } from 'next/router'
import useResource from '../hooks/useResource'

export default function StandDetail() {
    const router = useRouter();
    const { resources, error } = useResource();

    if (error) {
        onLogout();
        return null;
    }

    if (!resources) return <h2>Loading...</h2>



    const { id } = router.query;

    const resource = resources.find(item => item.id == id)

    return <h1>Stand detail {JSON.stringify(resource)}</h1>
}