import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = ()=>{
    return (
        <div className='footer-container'>
        <div className='footer-info '>
            <h3>info@almacenorganika.com</h3>
        </div>
        <footer>
            <a href='http://www.facebook.com'><FacebookIcon></FacebookIcon></a>
            <a href='http://www.instagram.com'><InstagramIcon></InstagramIcon></a>
            <a href='http://www.twitter.com'><TwitterIcon></TwitterIcon></a>
        </footer>
        </div>
    )
}
export default Footer