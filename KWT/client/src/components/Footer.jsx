import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Footer = () => {

	return (
		<div className="footer">
			<div className="tags">
				<p>Zespół Szkół Technicznych i Ogólnokształcących</p>
				<p>
					ul. Św. Ducha 1A <br />
					37-500 Jarosław
				</p>
				{/* <img src="" /> */}
			</div>
			<div className="border"></div>
			{/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.37623194218!2d19.9348336744093!3d50.046854813592944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1669977413818!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</Wrapper> */}
		</div>
	);
};

export default Footer;
