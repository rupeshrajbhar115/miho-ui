// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/EveryFlavour.module.scss";

// IMAGES //
import Mood from "../../public/img/home/mood.svg";
import FlavourBot1 from "../../public/img/home/flavour_bot_1.svg";
import RedWaveTop from "../../public/img/home/red_wave_top.svg";
import GreenWaveBottom from "../../public/img/home/green_wave_top.svg";
import RedCircle from "../../public/img/home/red_circle.png";
import GreenCircle from "../../public/img/home/green_circle.png";
import RedVector1 from "../../public/img/home/RedVector1.png";
import RedVector2 from "../../public/img/home/RedVector2.png";
import RedVector3 from "../../public/img/home/RedVector3.png";
import RedVector4 from "../../public/img/home/RedVector4.png";
import RedVector5 from "../../public/img/home/RedVector5.png";
import RedVector6 from "../../public/img/home/RedVector6.png";
import GreenVector1 from "../../public/img/home/GreenVector1.png";
import GreenVector2 from "../../public/img/home/GreenVector2.png";
import GreenVector3 from "../../public/img/home/GreenVector3.png";
import GreenVector4 from "../../public/img/home/GreenVector4.png";
import GreenVector5 from "../../public/img/home/GreenVector5.png";
import GreenVector6 from "../../public/img/home/GreenVector6.png";

// DATA //

/** EveryFlavour Section */
export default function EveryFlavour() {
	return (
		<section className={styles.EveryFlavour}>
			<div className={`${styles.top_text_section}`}>
				<div className="container">
					<div className={`${styles.text_section}`}>
						<div className={`section_big_title ${styles.text_animation}`}>
							<span className={styles.left_img}>Every Flavour,</span>
							<div className={styles.text_animation_inner}>
								<img src={Mood.src} alt="image" className="img-responsive" />
							</div>
							<span className={styles.right_img}>a Mood.</span>
						</div>
						<h6>
							Soft on the senses. Big on personality. Every bottle’s a vibe waiting to
							match yours.
						</h6>
					</div>
				</div>
			</div>

			<div className={`${styles.flavour_section_1}`}>
				<div className={`${styles.text_animation}`}>
					<div className={`${styles.text_left}`}>Berry</div>
					<div className={`${styles.text_left}`}>Bliss</div>
				</div>
				<img
					src={RedWaveTop.src}
					alt="image"
					className={`${styles.RedWaveTop} img-responsive`}
				/>
				<img
					src={FlavourBot1.src}
					alt="image"
					className={`${styles.FlavourBot1} img-responsive`}
				/>
				<img
					src={RedCircle.src}
					alt="image"
					className={`${styles.RedCircle} img-responsive`}
				/>
				<img
					src={RedVector1.src}
					alt="image"
					className={`${styles.RedVector1} img-responsive`}
				/>
				<img
					src={RedVector2.src}
					alt="image"
					className={`${styles.RedVector2} img-responsive`}
				/>
				<img
					src={RedVector3.src}
					alt="image"
					className={`${styles.RedVector3} img-responsive`}
				/>
				<img
					src={RedVector4.src}
					alt="image"
					className={`${styles.RedVector4} img-responsive`}
				/>
				<img
					src={RedVector5.src}
					alt="image"
					className={`${styles.RedVector5} img-responsive`}
				/>
				<img
					src={RedVector6.src}
					alt="image"
					className={`${styles.RedVector6} img-responsive`}
				/>
			</div>

			<div className={`${styles.flavour_section_2}`}>
				<div className={`${styles.text_animation}`}>
					<div className={`${styles.text_left}`}>Berry</div>
					<div className={`${styles.text_left}`}>Bliss</div>
				</div>
				<img
					src={GreenWaveBottom.src}
					alt="image"
					className={`${styles.RedWaveTop} img-responsive`}
				/>
				<img
					src={GreenCircle.src}
					alt="image"
					className={`${styles.GreenCircle} img-responsive`}
				/>
				<img
					src={FlavourBot1.src}
					alt="image"
					className={`${styles.FlavourBot1} img-responsive`}
				/>
				<img
					src={GreenVector1.src}
					alt="image"
					className={`${styles.GreenVector1} img-responsive`}
				/>
				<img
					src={GreenVector2.src}
					alt="image"
					className={`${styles.GreenVector2} img-responsive`}
				/>
				<img
					src={GreenVector3.src}
					alt="image"
					className={`${styles.GreenVector3} img-responsive`}
				/>
				<img
					src={GreenVector4.src}
					alt="image"
					className={`${styles.GreenVector4} img-responsive`}
				/>
				<img
					src={GreenVector5.src}
					alt="image"
					className={`${styles.GreenVector5} img-responsive`}
				/>
				<img
					src={GreenVector6.src}
					alt="image"
					className={`${styles.GreenVector6} img-responsive`}
				/>
			</div>
		</section>
	);
}
