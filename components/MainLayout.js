import classes from "./MainLayout.module.css";
import Link from "next/link";

export default function MainLayout({children}){
    return(
        <div className={classes.container}>
            <header className={classes.header}>
                <nav>
                    <Link href={'/posts'}>
                        <a>
                            <button>GO TO POSTS</button>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a>
                            <button>GO TO HOME</button>
                        </a>
                    </Link>
                    <Link href={'/CreatePost'}>
                        <a>
                            <button>CREATE POST</button>
                        </a>
                    </Link>

                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}