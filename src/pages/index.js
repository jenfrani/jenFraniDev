import * as React from "react";
import '../index.css';
import Layout from '../components/Layout';
import Timeline from "../components/Timeline";
import Milestone from "../components/Milestone";
import Skills from "../components/Skills";
import Paragraph from "../components/Paragraph";
import styled from "styled-components";
import Avatar from '../images/profilepicture.jpg';

const ProfilePicture = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${Avatar});
	background-position: center;
	width: 100%;
	height: 300px;
	border-radius: 8px;
	margin: 16px 0;
	@media (min-width: 480px) {
		width: 30%;
		min-height: 200px;
		min-width: 200px;
	}
	@media (min-width: 1024px) {
		min-height: 600px;
		min-width: 600px;
	}
`;

const Img = styled.img.attrs({
	src: Avatar
})`
	width: 300px;
	height: auto;	
`;

const Banner = styled.section`
	display: flex;
	flex-direction: column;
	@media (min-width: 480px) {
		flex-direction: row;
		margin: 24px auto;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
`;

const BannerText = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 480px) {
		margin-right: 16px;
	}
`;

const SocialIcon = styled.div`
	a {
		margin: 0 15px 0 0;
	}
`;

const Socials = styled.div`
	display: flex;
	flex-direction: row;
`;

const IndexPage = () => {
	return (
		<Layout>
			<Banner>
				<BannerText>
					<h1>Jen Frani</h1>
					<Paragraph>
						Front-end developer, among other things.<br />Based in Edmonton, Alberta.
					</Paragraph>
					<Socials>
						<SocialIcon>
							<a
								title='LinkedIn - Jen Frani'
								target='_blank'
								rel='noreferrer'
								href='http://www.linkedin.com/in/jeneel-frani'
							>
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0H0V32H32V0ZM6.49256 12.8594H10.6365V25.3102H6.49256V12.8594ZM10.9097 9.00777C10.8828 7.78697 10.0098 6.85714 8.59217 6.85714C7.17456 6.85714 6.24777 7.78697 6.24777 9.00777C6.24777 10.2033 7.14716 11.1599 8.53838 11.1599H8.56486C10.0098 11.1599 10.9097 10.2033 10.9097 9.00777ZM20.8097 12.567C23.5366 12.567 25.5809 14.3469 25.5809 18.1712L25.5808 25.3102H21.437V18.649C21.437 16.9758 20.8373 15.8341 19.3372 15.8341C18.1924 15.8341 17.5105 16.6038 17.211 17.3472C17.1014 17.6136 17.0745 17.9848 17.0745 18.3569V25.3105H12.9301C12.9301 25.3105 12.9847 14.028 12.9301 12.8597H17.0745V14.6232C17.6245 13.7754 18.6095 12.567 20.8097 12.567Z" fill="#303633" />
								</svg>
							</a>
						</SocialIcon>
						<SocialIcon>
							<a
								title='Github - Jen Frani'
								target='_blank'
								rel='noreferrer'
								href='https://github.com/jenfrani'
							>
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0H0V32H10.8343C4.5528 29.787 0.0382309 23.6764 0.0382309 16.4837C0.0382309 7.42316 7.20289 0.0787376 16.0384 0.0787376C24.4999 0.0787376 31.4276 6.81345 32 15.3407V0ZM32 17.627C31.551 24.3183 27.1907 29.9048 21.245 32H32V17.627ZM20.4311 32C20.1269 31.8571 20.0066 31.5435 20.0066 31.2614C20.0066 31.0823 20.0086 30.7687 20.0114 30.3496V30.3495V30.3493V30.3491V30.3489V30.3487V30.3485V30.3482V30.3479V30.3479V30.3478V30.3477V30.3476V30.3474V30.347C20.0169 29.5008 20.0251 28.2256 20.0251 26.7594C20.0251 25.2288 19.5138 24.2304 18.9399 23.7213C22.5027 23.3152 26.2458 21.9278 26.2458 15.6269C26.2458 13.8358 25.625 12.3723 24.5991 11.2235C24.7652 10.81 25.3131 9.1417 24.4422 6.88201C24.4422 6.88201 23.1005 6.4411 20.0466 8.5636C18.7679 8.20012 17.3981 8.01783 16.0384 8.01158C14.6786 8.01783 13.3099 8.20012 12.0336 8.5636C8.97598 6.4411 7.63239 6.88201 7.63239 6.88201C6.7636 9.1417 7.31126 10.81 7.47739 11.2235C6.45386 12.3723 5.82883 13.8358 5.82883 15.6269C5.82883 21.9129 9.5647 23.3195 13.1186 23.7344C12.661 24.1438 12.2463 24.868 12.1027 25.9281C11.1897 26.3472 8.8737 27.0723 7.44665 24.5643C7.44665 24.5643 6.60065 22.9892 4.99396 22.8738C4.99396 22.8738 3.43284 22.8528 4.88453 23.871C4.88453 23.871 5.93323 24.3752 6.66106 26.2714C6.66106 26.2714 7.60033 29.1994 12.0516 28.207C12.0553 28.9521 12.0614 29.674 12.0662 30.2406V30.2407V30.2409V30.241L12.0662 30.2412L12.0662 30.2435L12.0662 30.2447C12.0702 30.7185 12.0733 31.0833 12.0733 31.2614C12.0733 31.5436 11.9487 31.8575 11.6408 32H20.4311ZM5.82406 23.6828C5.93799 23.7387 6.06305 23.7145 6.09829 23.6328C6.13857 23.551 6.07233 23.4388 5.95601 23.385C5.84023 23.3293 5.7149 23.3524 5.68046 23.4364C5.64283 23.5181 5.70801 23.6292 5.82406 23.6828ZM6.74637 24.3739C6.67007 24.4464 6.5209 24.4127 6.41968 24.2981C6.31503 24.1837 6.29542 24.0308 6.37279 23.9571C6.45148 23.8846 6.59614 23.9186 6.70107 24.0329C6.80572 24.1487 6.82613 24.3005 6.74637 24.3739ZM7.01981 25.1772C7.1189 25.3231 7.2792 25.3885 7.37723 25.3187C7.47739 25.2473 7.47739 25.0721 7.37962 24.924C7.2792 24.7792 7.12129 24.7162 7.02193 24.7863C6.92177 24.8563 6.92177 25.0313 7.01981 25.1772ZM8.24152 26.2315C8.15382 26.3307 7.96702 26.304 7.83031 26.1688C7.69041 26.0365 7.65146 25.8487 7.73943 25.7496C7.82819 25.6502 8.01604 25.6781 8.15382 25.8123C8.29265 25.9444 8.33505 26.1334 8.24152 26.2315ZM9.034 26.8938C9.21523 26.9484 9.39513 26.89 9.43382 26.7615C9.47144 26.6309 9.35274 26.4814 9.17204 26.4255C8.98949 26.3671 8.80879 26.4279 8.77116 26.5572C8.7346 26.6871 8.85303 26.8376 9.034 26.8938ZM10.7432 26.8599C10.7477 26.9952 10.5941 27.1074 10.4038 27.1095C10.2125 27.1141 10.0578 27.0047 10.0557 26.8716C10.0557 26.7349 10.2059 26.6238 10.3972 26.6205C10.5874 26.6167 10.7432 26.7254 10.7432 26.8599ZM11.6634 26.9506C11.8523 26.9147 11.9845 26.7792 11.9618 26.6472C11.9376 26.513 11.7683 26.4336 11.5792 26.4673C11.3937 26.5024 11.2591 26.6379 11.2821 26.7732C11.3057 26.9041 11.4777 26.9856 11.6634 26.9506Z" fill="#303633" />
								</svg>
							</a>
						</SocialIcon>
					</Socials>
				</BannerText>
				<ProfilePicture />
			</Banner>
			<section>
				<Skills />
			</section>
			<Timeline>
				<Milestone title="Information Technology" description="Bachelor's Degree" location="STI College, Philippines" date="October 2012" />
				<Milestone title="Software Engineer" location="Accenture, Philippines" date="Dec 2013 - Apr 2017" />
				<Milestone title="Software Engineer" location="Infor, Philippines" date="May 2017 - Jul 2019" />
				<Milestone title="Moved to Canada" location="Edmonton, Alberta" date="August 2019" />
				<Milestone title="Technology Management" description="Bachelor's Degree" location="NAIT, Alberta" date="June 2021" />
			</Timeline>
		</Layout >

	);
};

export default IndexPage;
