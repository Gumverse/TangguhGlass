"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/kontak.jpg";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import emailjs from "emailjs-com";
function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const submitForm = (formData) => {
		emailjs.send(
			"YOUR_SERVICE_ID", // ganti dengan Service ID dari EmailJS
			"YOUR_TEMPLATE_ID", // ganti dengan Template ID dari EmailJS
			{
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				message: formData.textarea
			},
			"YOUR_USER_ID" // ganti dengan User ID/Public Key dari EmailJS
		)
		.then((result) => {
			alert("Pesan berhasil dikirim!");
			reset();
		}, (error) => {
			alert("Terjadi kesalahan, pesan gagal dikirim.");
		});
	};
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				{/* SEO Hidden Content */}
				<div className="sr-only">
					<h1>Hubungi Tangguh Glass - Spesialis Kaca Patri & Aluminium</h1>
					<p>
						Formulir kontak ini digunakan untuk menghubungi Tangguh Glass, perusahaan spesialis kaca patri dan kaca aluminium terbaik di Indonesia. Silakan isi nama, email, nomor telepon, dan pesan Anda untuk mendapatkan penawaran atau konsultasi gratis seputar kerajinan kaca dekoratif.
					</p>
				</div>
				{/* End SEO Hidden Content */}
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
								Hubungi kami 
								</span>
								&nbsp; untuk Kerajinan kaca patri & aluminium terbaik.
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<Image src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea
										{...register("textarea", { required: "Message is required." })}
										name="textarea"
									></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
