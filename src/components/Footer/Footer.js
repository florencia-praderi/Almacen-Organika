import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = ()=>{
    return (
        <div className='footer-container'>
        <footer>            
            <div>info@almacenorganika.com</div>
            <a href='http://www.facebook.com'><FacebookIcon/></a>
            <a href='http://www.instagram.com'><InstagramIcon/></a>
            <a href='http://www.twitter.com'><TwitterIcon/></a>
        </footer>
        </div>
    )
}
export default Footer