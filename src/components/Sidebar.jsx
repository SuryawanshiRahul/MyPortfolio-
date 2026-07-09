import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
    MdEmail,
    MdPhoneAndroid,
    MdLocationOn,
    MdCalendarToday,
} from "react-icons/md";

import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaXTwitter,
    FaChevronDown,
} from "react-icons/fa6";

import avatarDesktop from "../assets/images/Myavatar1.png";
import avatarMobile from "../assets/images/profile1.png";
import profile from "../data/profile";
function Sidebar() {
const [isExpanded, setIsExpanded] = useState(false);
    return (
        <aside className={`sidebar ${isExpanded ? "active" : ""}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
  <picture>
    <source
      media="(max-width: 579px)"
      srcSet={avatarMobile}
    />

    <img
      src={avatarDesktop}
      alt="Rahul Suryawanshi"
      className="avatar-image"
    />
  </picture>
</figure>

                <div className="info-content">
                    <h1 className="name">
                        {profile.name}
                    </h1>

                    <p className="title">{profile.title}</p>

                    <p className="company">{profile.company}</p>
                </div>

                <button
                    className="info_more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <span>
                        {isExpanded  ? "Hide Contacts" : "Show Contacts"}
                    </span>

                    <FaChevronDown />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <MdEmail />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a
                                href={`mailto:${profile.email}`}
                                className="contact-link"
                            >
                                {profile.email}
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <MdPhoneAndroid />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a
                                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                                className="contact-link"
                            >
                                {profile.phone}
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <MdCalendarToday />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time>{profile.birthday}</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <MdLocationOn />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>{profile.location}</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="social-item">
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                        >
                            <FaGithub />
                        </a>
                    </li>

                    <li className="social-item">
                        <a
                            href={profile.social.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                        >
                            <FaFacebook />
                        </a>
                    </li>

                    <li className="social-item">
                        <a
                            href={profile.social.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                        >
                            <FaXTwitter />
                        </a>
                    </li>

                    <li className="social-item">
                        <a
                            href={profile.social.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;