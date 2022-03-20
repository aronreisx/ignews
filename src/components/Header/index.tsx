import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" width="108.45px" height="30.27px"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}
