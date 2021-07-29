import {useRouter} from "next/router";

export default function Post(){
    const router = useRouter()
    return (
        <div>
            id : {router.query.id}
        </div>
    )
}