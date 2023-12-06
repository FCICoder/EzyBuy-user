import { Link } from 'react-router-dom'
import style from './NotFound.module.css'
import notFound from '../../assets/notfound.jpg'
export default function NotFound() {
  return <>
  <div class="container d-flex flex-column  justify-content-center align-items-center w-100">
            <img className='img-fluid w-50'  src={notFound} />
            <div className={style.info}>
                <Link>Back to Home</Link>
            </div>
        </div >
  </>
}
