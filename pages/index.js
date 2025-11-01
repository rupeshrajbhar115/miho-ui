/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import IndianMade from "@/sections/IndianMade";
import EveryFlavour from "@/sections/EveryFlavour";

// PLUGINS //
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
	FreeMode,
	Navigation,
	Thumbs,
	Autoplay,
	Pagination,
} from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import Loaction from "../public/img/loaction.svg";
import Call from "../public/img/call.svg";
import Mail from "../public/img/mail.svg";
import Moji from "../public/img/home/moji.png";
import FindImage from "../public/img/home/find_img.jpg";
import MihoSliderImg1 from "../public/img/home/mihoSlider1.jpg";
import MihoSliderImg2 from "../public/img/home/mihoSlider2.jpg";
import MihoArrow from "../public/img/home/mihoArrow.svg";
import Mihopedia1 from "../public/img/home/mihopedia1.jpg";
import Mihopedia2 from "../public/img/home/mihopedia2.jpg";
import LeftArrow from "../public/img/home/left_arrow.svg";
import RightArrow from "../public/img/home/right_arrow.svg";
import JustImg1 from "../public/img/home/just_img_1.jpg";
import JustImg2 from "../public/img/home/just_img_2.jpg";
import JustBottle1 from "../public/img/home/just_bottle_1.png";
import JustBottle2 from "../public/img/home/just_bottle_2.png";
import Fire from "../public/img/home/fire.svg";
import JustArrow from "../public/img/home/just_arrow.svg";
import GreenWaveTop from "../public/img/home/green_wave_bottom.svg";
import MainAnimationSection from "@/sections/MainAnimationSection";

// DATA //

/** Home Page */
export default function HomePage() {
	const resultsRef = useRef(null);
	const swiperRef1 = useRef(null);
	const swiperRef2 = useRef(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(3);
	const [totalSlides, setTotalSlides] = useState(0);
	useEffect(() => {
		const resultsBox = resultsRef.current;

		/** handleWheel */
		const handleWheel = (e) => {
			const { scrollTop, scrollHeight, clientHeight } = resultsBox;
			const atTop = scrollTop === 0;
			const atBottom = scrollTop + clientHeight >= scrollHeight;

			// Scroll inside the box
			if (
				(!atTop && !atBottom) ||
				(atTop && e.deltaY > 0) ||
				(atBottom && e.deltaY < 0)
			) {
				e.stopPropagation();
			}
		};

		resultsBox.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			resultsBox.removeEventListener("wheel", handleWheel);
		};
	}, []);
	/** find locationsData */
	const locationsData = [
		{
			name: "Foodcenter Andheri",
			address: "Foodcenter Andheri, Marol Industrial Area, Andheri East, Mumbai",
			city: "Mumbai",
		},
		{
			name: "Swaad Bazaar",
			address: "Swaad Bazaar, Sector 62, Noida, Uttar Pradesh",
			city: "Noida",
		},
		{
			name: "Annapurna Organics",
			address: "Annapurna Organics, Koramangala 5th Block, Bengaluru",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
		{
			name: "Foodcenter Indiranagar",
			address:
				"Foodcenter Indiranagar, 12th Main Road, Indiranagar, Bengaluru, Karnataka",
			city: "Bengaluru",
		},
	];
	const [selectedCity, setSelectedCity] = useState("Mumbai");
	const [filteredData, setFilteredData] = useState(
		locationsData.filter((loc) => loc.city === "Mumbai")
	);

	/** handleSearch */
	const handleSearch = () => {
		const results = locationsData.filter(
			(loc) => loc.city.toLowerCase() === selectedCity.toLowerCase()
		);
		setFilteredData(results);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	/** onSubmit */
	const onSubmit = (data) => {
		console.log("Form Submitted:", data);
		alert("Form submitted successfully!");
		reset();
	};

	const mainSwiperSettings = {
		loop: true,
		spaceBetween: 10,
		navigation: false,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1000,
		pagination: {
			el: ".custom-progressbar",
			type: "progressbar",
		},
		thumbs: { swiper: thumbsSwiper },
		modules: [FreeMode, Navigation, Thumbs, Autoplay, Pagination],
		className: "mySwiper2",

		// ✅ Sync thumbs on each slide change
		onSlideChange: (swiper) => {
			if (thumbsSwiper && !thumbsSwiper.destroyed) {
				thumbsSwiper.slideToLoop(swiper.realIndex);
			}
		},
	};
	const thumbsSwiperSettings = {
		onSwiper: setThumbsSwiper,
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		fade: true,
		watchSlidesProgress: true,
		centeredSlides: true, // 👈 keep center alignment
		slideToClickedSlide: true, // 👈 allow clicking to control main
		modules: [FreeMode, Navigation, Thumbs, Autoplay],
		className: "mySwiper",

		// ✅ remove autoplay here if you want main to control both
		// OR keep this same delay for synced autoplay
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	};
	const mihopediaSettings = {
		modules: [Navigation, Autoplay],
		loop: true,
		spaceBetween: 10,
		slidesPerView: 2,
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		onBeforeInit: (swiper) => {
			swiperRef2.current = swiper;
		},
	};
	const justSettings = {
		modules: [Navigation, Autoplay],
		loop: true,
		spaceBetween: 10,
		slidesPerView: 2,
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		onBeforeInit: (swiper) => {
			swiperRef1.current = swiper;
		},
		onInit: (swiper) => {
			// ✅ Get actual total slides (not including loop duplicates)
			const realSlides = swiper.slides.filter(
				(slide) => !slide.classList.contains("swiper-slide-duplicate")
			);
			setTotalSlides(realSlides.length);
			setCurrentSlide(swiper.realIndex + 1);
		},
		onSlideChange: (swiper) => {
			setCurrentSlide(swiper.realIndex + 1);
		},
	};

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<MainAnimationSection />
				<IndianMade />
				<EveryFlavour />
				<section className={`${styles.just_section}`}>
					<img
						src={GreenWaveTop.src}
						alt="GreenWaveTop"
						className={`${styles.GreenWaveTop} img-responsive`}
					/>
					<div className="container">
						<div className={`${styles.left_right_section}`}>
							<div className={`${styles.left_section}`}>
								<h2 className="section_big_title">
									<span>Not soju.</span>
									<br />
									<span>Just MiHO.</span>
								</h2>
								<p>Your drink, your vibe, your MiHO-ment.</p>
								<img
									src={Fire.src}
									alt="fire"
									className={`${styles.fire} img-responsive`}
								/>
							</div>
							<div className={`${styles.right_section}`}>
								<div className={styles.navButtons}>
									<div
										className={styles.prevBtn}
										onClick={() => swiperRef1.current?.slidePrev()}
									>
										<img src={JustArrow.src} alt="Previous" className="img-responsive" />
									</div>
									{/* ✅ Slide Counter */}
									<div className={styles.slideCount}>
										{currentSlide} / {totalSlides}
									</div>
									<div
										className={styles.nextBtn}
										onClick={() => swiperRef1.current?.slideNext()}
									>
										<img src={JustArrow.src} alt="Previous" className="img-responsive" />
									</div>
								</div>
								<Swiper {...justSettings}>
									<SwiperSlide>
										<div className={`${styles.img_info_item}`}>
											<div className={`${styles.img_item}`}>
												<img
													src={JustImg2.src}
													alt="Slide 1"
													className={`${styles.just_img} img-responsive`}
												/>
												<div className={styles.info_arrow}>
													<div className={styles.item_arrow}>
														<img
															src={JustBottle1.src}
															alt="arrow"
															className={`${styles.JustBottle} responsive`}
														/>
													</div>
													<div className={styles.item_info}>
														<div className={styles.title}>Sun Daze</div>
														<div className={styles.sub_time}>Super loved it!!!</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.img_info_item}`}>
											<div className={`${styles.img_item}`}>
												<img
													src={JustImg1.src}
													alt="Slide 1"
													className={`${styles.just_img} img-responsive`}
												/>
												<div className={`${styles.info_arrow} ${styles.color_2}`}>
													<div className={styles.item_arrow}>
														<img
															src={JustBottle2.src}
															alt="arrow"
															className={`${styles.JustBottle} img-responsive`}
														/>
													</div>
													<div className={styles.item_info}>
														<div className={styles.title}>Berry Bliss</div>
														<div className={styles.sub_time}>Amazing! drink Ever!</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={`${styles.img_info_item}`}>
											<div className={`${styles.img_item}`}>
												<img
													src={JustImg2.src}
													alt="Slide 1"
													className={`${styles.just_img} img-responsive`}
												/>
												<div className={styles.info_arrow}>
													<div className={styles.item_arrow}>
														<img
															src={JustBottle1.src}
															alt="arrow"
															className={`${styles.JustBottle} img-responsive`}
														/>
													</div>
													<div className={styles.item_info}>
														<div className={styles.title}>Sun Daze</div>
														<div className={styles.sub_time}>Super loved it!!!</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.miho_slider_section}`}>
					<div className="container">
						<div className={`${styles.miho_mihopedia_section}`}>
							<div className={`${styles.mihopedia}`}>
								<h2 className="section_big_title">Mihopedia</h2>
								<div className={`${styles.slider_section}`}>
									{/* Custom Navigation Buttons */}
									<div className={styles.navButtons}>
										<div
											className={styles.prevBtn}
											onClick={() => swiperRef2.current?.slidePrev()}
										>
											<img src={LeftArrow.src} alt="Previous" className="img-responsive" />
										</div>
										<div
											className={styles.nextBtn}
											onClick={() => swiperRef2.current?.slideNext()}
										>
											<img
												src={RightArrow.src}
												alt="Previous"
												className="img-responsive"
											/>
										</div>
									</div>
									<Swiper {...mihopediaSettings}>
										<SwiperSlide>
											<div className={`${styles.img_info_item}`}>
												<div className={`${styles.img_item}`}>
													<img
														src={Mihopedia1.src}
														alt="Slide 1"
														className="img-responsive"
													/>
													<div className={styles.info_arrow}>
														<div className={styles.item_info}>
															<div className={styles.time}>3 min read</div>
															<div className={styles.title}>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed..
															</div>
														</div>
														<div className={styles.item_arrow}>
															<img
																src={MihoArrow.src}
																alt="arrow"
																className="img-responsive"
															/>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className={`${styles.img_info_item}`}>
												<div className={`${styles.img_item}`}>
													<img
														src={Mihopedia2.src}
														alt="Slide 1"
														className="img-responsive"
													/>
													<div className={styles.info_arrow}>
														<div className={styles.item_info}>
															<div className={styles.time}>3 min read</div>
															<div className={styles.title}>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed..
															</div>
														</div>
														<div className={styles.item_arrow}>
															<img
																src={MihoArrow.src}
																alt="arrow"
																className="img-responsive"
															/>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className={`${styles.img_info_item}`}>
												<div className={`${styles.img_item}`}>
													<img
														src={Mihopedia2.src}
														alt="Slide 1"
														className="img-responsive"
													/>
													<div className={styles.info_arrow}>
														<div className={styles.item_info}>
															<div className={styles.time}>3 min read</div>
															<div className={styles.title}>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed..
															</div>
														</div>
														<div className={styles.item_arrow}>
															<img
																src={MihoArrow.src}
																alt="arrow"
																className="img-responsive"
															/>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
							<h2 className="section_big_title">Miho Events</h2>
							<div className={`${styles.miho_events}`}>
								<div className="custom-progressbar"></div>

								{/* Main Slider */}
								<div className={`${styles.big_slider}`}>
									<Swiper {...mainSwiperSettings}>
										<SwiperSlide>
											<div className={`${styles.img_info_item}`}>
												<div className={`${styles.img_item}`}>
													<img
														src={MihoSliderImg1.src}
														alt="Slide 1"
														className="img-responsive"
													/>
												</div>
												<div className={`${styles.info_item}`}>
													<div className={styles.date_formet}>
														<span className={styles.date}>
															5<sup>th</sup>
														</span>
														<span className={styles.month}>Dec</span>|
														<span className={styles.year}>2025</span>
													</div>
													<p className={styles.desc}>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt.
													</p>
													<div className={styles.MihoArrow}>
														<a href="">
															<img
																src={MihoArrow.src}
																alt="arrow"
																className="img-responsive"
															/>
														</a>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className={`${styles.img_info_item}`}>
												<div className={`${styles.img_item}`}>
													<img
														src={MihoSliderImg2.src}
														alt="Slide 1"
														className="img-responsive"
													/>
												</div>
												<div className={`${styles.info_item}`}>
													<div className={styles.date_formet}>
														<span className={styles.date}>
															6<sup>th</sup>
														</span>
														<span className={styles.month}>Dec</span>|
														<span className={styles.year}>2025</span>
													</div>
													<p className={styles.desc}>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt.
													</p>
													<div className={styles.MihoArrow}>
														<a href="">
															<img
																src={MihoArrow.src}
																alt="arrow"
																className="img-responsive"
															/>
														</a>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>

								{/* Thumbnail Slider */}
								<div className={`${styles.small_slider}`}>
									<Swiper {...thumbsSwiperSettings}>
										<SwiperSlide>
											<div className={`${styles.img_item}`}>
												<img
													src={MihoSliderImg2.src}
													alt="Slide 1"
													className="img-responsive"
												/>
												<div className={`${styles.info_item}`}>
													<div className={styles.date_formet}>
														<span className={styles.date}>
															6<sup>th</sup>
														</span>
														<span className={styles.month}>Dec</span>|
														<span className={styles.year}>2025</span>
													</div>
													<p className={styles.desc}>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt.
													</p>
												</div>
												<div className={styles.MihoArrow}>
													<a href="">
														<img src={MihoArrow.src} alt="arrow" className="img-responsive" />
													</a>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className={`${styles.img_item}`}>
												<img
													src={MihoSliderImg1.src}
													alt="Slide 1"
													className="img-responsive"
												/>
												<div className={`${styles.info_item}`}>
													<div className={styles.date_formet}>
														<span className={styles.date}>
															5<sup>th</sup>
														</span>
														<span className={styles.month}>Dec</span>|
														<span className={styles.year}>2025</span>
													</div>
													<p className={styles.desc}>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt.
													</p>
												</div>
												<div className={styles.MihoArrow}>
													<a href="">
														<img src={MihoArrow.src} alt="arrow" className="img-responsive" />
													</a>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.fing_faq_section}`}>
					<div className="container">
						<div className={styles.find_section}>
							<div className={styles.img_section}>
								<h2 className="section_big_title">
									<span>Find Your MiHO.</span>
								</h2>
								<div className={styles.find_img}>
									<img
										src={FindImage.src}
										alt="Find Your MiHO"
										className="img-responsive"
									/>
								</div>
							</div>
							<div className={styles.data_section}>
								<div className={styles.locationSection}>
									<div className={styles.searchBar}>
										<select
											value={selectedCity}
											onChange={(e) => setSelectedCity(e.target.value)}
											className={styles.dropdown}
										>
											<option value="Mumbai">Mumbai</option>
											<option value="Noida">Noida</option>
											<option value="Bengaluru">Bengaluru</option>
										</select>
										<button onClick={handleSearch} className="submitButton">
											SEARCH
										</button>
									</div>

									<div className={styles.results} ref={resultsRef}>
										{filteredData.length > 0 ? (
											filteredData.map((item, index) => (
												<div key={index} className={styles.resultItem}>
													<h4>{item.name}</h4>
													<p>{item.address}</p>
													<hr />
												</div>
											))
										) : (
											<p className={styles.noResult}>No locations found.</p>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.faq_items}`}>
							<div className={styles.title_moji}>
								<div className={styles.title}>
									<h2 className="section_big_title">Faq’s</h2>
								</div>
								<div className={styles.title_moji}>
									<img src={Moji.src} alt="moji" className="img-responsive" />
								</div>
							</div>
							<div className={`${styles.faq_desc}`}>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
								<a href="#" className="submitButton">
									Know More
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.connect_section}`}>
					<div className="container">
						<div className={`${styles.connect}`}>
							<div className={`${styles.connect_info}`}>
								<h2 className="section_title">Connect with us</h2>
								<ul>
									<li>
										<a>
											<img src={Loaction.src} alt="location" className="img-responsive" />
											Marol Industrial Area, Andheri East, Mumbai
										</a>
									</li>
									<li>
										<a href="mailto:info@miho">
											<img src={Mail.src} alt="location" className="img-responsive" />
											info@miho
										</a>
									</li>
									<li>
										<a href="tel:+91704006112">
											<img src={Call.src} alt="location" className="img-responsive" /> +91
											(0) 70 400 61 12
										</a>
									</li>
								</ul>
							</div>
							<div className={`${styles.connect_form}`}>
								<h2 className="section_title">Send a message</h2>

								<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
									<div className={styles.row}>
										<div className={styles.inputGroup}>
											<input
												type="text"
												placeholder="First Name*"
												{...register("firstName", { required: true })}
											/>
											{errors.firstName && (
												<span className={styles.error}>First Name is required</span>
											)}
										</div>

										<div className={styles.inputGroup}>
											<input
												type="text"
												placeholder="Last Name*"
												{...register("lastName", { required: true })}
											/>
											{errors.lastName && (
												<span className={styles.error}>Last Name is required</span>
											)}
										</div>
									</div>

									<div className={styles.row}>
										<div className={styles.inputGroup}>
											<input
												type="email"
												placeholder="Email*"
												{...register("email", {
													required: "Email is required",
													pattern: {
														value: /^\S+@\S+$/i,
														message: "Invalid email address",
													},
												})}
											/>
											{errors.email && (
												<span className={styles.error}>{errors.email.message}</span>
											)}
										</div>

										<div className={styles.inputGroup}>
											<input
												type="tel"
												placeholder="Phone Number*"
												{...register("phone", {
													required: "Phone number is required",
													minLength: {
														value: 10,
														message: "Must be at least 10 digits",
													},
												})}
											/>
											{errors.phone && (
												<span className={styles.error}>{errors.phone.message}</span>
											)}
										</div>
									</div>

									<div className={styles.inputGroupFull}>
										<textarea
											rows="5"
											placeholder="Message*"
											{...register("message", { required: true })}
										></textarea>
										{errors.message && (
											<span className={styles.error}>Message is required</span>
										)}
									</div>

									<button type="submit" className="submitButton">
										SUBMIT
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
