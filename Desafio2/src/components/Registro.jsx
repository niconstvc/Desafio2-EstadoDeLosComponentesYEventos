import { faFacebook, faGithub, faLinkedinIn,faTwitter } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

function Registro({message, setAlert}) {
	return (
		<>
  		<section>
    		<h1>Crea una cuenta</h1>
      	<div className="social">
          <a href="https://es-la.facebook.com/login/device-based/regular/login/?login_attempt=1">
    <SocialButton icon={faFacebook} />
</a>
<a href="https://github.com/login">
    <SocialButton icon={faGithub} />
</a>
<a href="https://www.linkedin.com/login/es">
    <SocialButton icon={faLinkedinIn} />
</a>

      	</div>
      	<h6>O usa tu email para registrarte</h6>
      	<Formulario setAlert={setAlert} />
				<Alert color={message.color} msg={message.msg} />
			</section>  
		</>
	)
}
export default Registro