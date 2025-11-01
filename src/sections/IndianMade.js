// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/IndianMade.module.scss";

// IMAGES //
import LeftWave from "../../public/img/home/left_wave.png";
import RightWave from "../../public/img/home/right_wave.png";
import LeftLine from "../../public/img/home/left_line.png";
import CenterLine from "../../public/img/home/center_line.png";
import RightLine from "../../public/img/home/right_line.png";
import Leaf from "../../public/img/home/leaf.png";
import Mood from "../../public/img/home/moon.png";
import Flovare1 from "../../public/img/home/flovare1.png";
import Flovare2 from "../../public/img/home/flovare2.png";
import Flovare3 from "../../public/img/home/flovare3.png";
import Flovare4 from "../../public/img/home/flovare4.png";

// DATA //

/** IndianMade Section */
export default function IndianMade() {
	return (
		<section className={styles.IndianMade}>
			<img
				src={LeftLine.src}
				alt="image"
				className={`${styles.LeftLine} img-responsive`}
			/>
			<img
				src={CenterLine.src}
				alt="image"
				className={`${styles.CenterLine} img-responsive`}
			/>
			<img
				src={RightLine.src}
				alt="image"
				className={`${styles.RightLine} img-responsive`}
			/>
			<img
				src={Leaf.src}
				alt="image"
				className={`${styles.Leaf} img-responsive`}
			/>
			<img
				src={Mood.src}
				alt="image"
				className={`${styles.Mood} img-responsive`}
			/>
			<img
				src={Flovare1.src}
				alt="image"
				className={`${styles.Flovare1} img-responsive`}
			/>
			<img
				src={Flovare2.src}
				alt="image"
				className={`${styles.Flovare2} img-responsive`}
			/>
			<img
				src={Flovare3.src}
				alt="image"
				className={`${styles.Flovare3} img-responsive`}
			/>
			<img
				src={Flovare4.src}
				alt="image"
				className={`${styles.Flovare4} img-responsive`}
			/>
			<div className={styles.text_section}>
				<div className={styles.title_animation}>
					<div className={styles.one}>
						<h2 className="section_big_title">
							<span>Indian-Made. </span>
						</h2>
					</div>
					<div className={styles.two}>
						<h2 className="section_big_title">
							<span>K-Wave Inspired.</span>
						</h2>
					</div>
					<div className={styles.three}>
						<h2 className="section_big_title">
							<span>You-Approved.</span>
						</h2>
					</div>
					<div className={styles.para_data}>
						MiHO brings together the cool of Korea and the spirit of India. Born out
						of a love for culture, friendship, and feel-good fun, MiHO is a home-grown
						rice wine that flips the script on how we drink.
					</div>
				</div>
			</div>
			<div className={styles.bottom_img}>
				<div className={styles.left_img}>
					<img src={LeftWave.src} alt="image" className="img-responsive" />
				</div>
				<div className={styles.right_img}>
					<img src={RightWave.src} alt="image" className="img-responsive" />
				</div>
			</div>
		</section>
	);
}
