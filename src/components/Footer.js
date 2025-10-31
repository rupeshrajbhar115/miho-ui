// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import faceBook from "../../public/img/facebook.svg";
import instagram from "../../public/img/insta.svg";
import YouTube from "../../public/img/youtub.svg";
import twitter from "../../public/img/tw.svg";
import Link from "../../public/img/in.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_section}`}>
					<p>© {new Date().getFullYear()} MIHO</p>
					<div className={`${styles.social_media}`}>
						<ul>
							<li>
								<a href="">
									<img src={faceBook.src} alt="facebook" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={instagram.src} alt="facebook" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={YouTube.src} alt="facebook" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={twitter.src} alt="facebook" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={Link.src} alt="facebook" />
								</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.made}`}>Made by Doable Works</div>
				</div>
			</div>
		</footer>
	);
}
