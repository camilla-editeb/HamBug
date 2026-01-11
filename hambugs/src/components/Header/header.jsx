import pacman from '../../assets/pacman.png'
import s from './header.module.scss'



export default function Header(){
    return(
        <header className={s.headerhambug}>
            <h1>HamBUG_</h1>
            <img src={pacman} alt="" />
        </header>
    )
}