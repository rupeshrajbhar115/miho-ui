// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/MainAnimationSection.module.scss";

// IMAGES //
import BannerWave from "../../public/img/home/banner_wave.svg";
import RedBottle from "../../public/img/home/red_bottle.png";
import GreenBottle from "../../public/img/home/green_bottle.png";
import BannerLeaf from "../../public/img/home/BannerLeaf.png";
import bannerVector1 from "../../public/img/home/bannerVector1.png";
import bannerVector2 from "../../public/img/home/bannerVector2.png";
import bannerVector3 from "../../public/img/home/bannerVector3.png";
import bannerVector4 from "../../public/img/home/bannerVector4.png";

// DATA //

/** MainAnimationSection Section */
export default function MainAnimationSection() {
	return (
		<section className={styles.MainAnimationSection}>
			<div className={styles.banner_section}>
				<img
					src={bannerVector4.src}
					alt="image"
					className={`${styles.bannerVector4} img-responsive`}
				/>
				<img
					src={BannerWave.src}
					alt="image"
					className={`${styles.bannerWave} img-responsive`}
				/>
				<div className={styles.banner}>
					<div className={styles.left_section}>
						<h2>Flavour Every Emotion</h2>
					</div>
					<div className={styles.right_section}>
						<img
							src={BannerLeaf.src}
							alt="image"
							className={`${styles.BannerLeaf} img-responsive`}
						/>
						<img
							src={bannerVector1.src}
							alt="image"
							className={`${styles.bannerVector1} img-responsive`}
						/>
						<img
							src={bannerVector2.src}
							alt="image"
							className={`${styles.bannerVector2} img-responsive`}
						/>
						<img
							src={bannerVector3.src}
							alt="image"
							className={`${styles.bannerVector3} img-responsive`}
						/>
						<div className={styles.bottle}>
							<img
								src={RedBottle.src}
								alt="image"
								className={`${styles.RedBottle} img-responsive`}
							/>
							<img
								src={GreenBottle.src}
								alt="image"
								className={`${styles.GreenBottle} img-responsive`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
