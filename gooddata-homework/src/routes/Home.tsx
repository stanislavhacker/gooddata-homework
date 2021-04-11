import React from "react";

import Page from "../components/Page";

import styles from "./Home.module.scss";
import {t, LocalesContext} from "../contexts/Locales";

import gitlab from "../media/gitlab-icon-rgb.png";
import github from "../media/github-logo.png";

const Home: React.FC = () => {
	return (
		<Page>
            <LocalesContext.Consumer>
                {(locales) => (
                    <>
                        <div className={styles.Lead}>
                            <h1>{t(locales, "Home")}</h1>
                        </div>
						<h2>Stanislav Hacker</h2>

						<h4>About</h4>
						<div>
							<p>
								I used to do work fairly well in the given deadline. I'm trying to meet people and help the less knowledgeable.
								I developing in different languages for 17 years and in that time I have tried every well known programming languages.
								I became most familiar with JavaScript and Web technologies and also with programming for Windows 10 and Windows Phone.
								Last years i'm developing web applications in TypeScript and with using of React or Vue frameworks.
							</p>
						</div>

						<h4>My projects</h4>
						<div className={styles.Project}>
							<img src={gitlab} alt="" aria-hidden width="30" />
							<p><a href="https://gitlab.com/stanislavhacker/servant" target="_blank" rel="noopener noreferrer">Servant</a>  - JS and TS build tool</p>
						</div>
						<div className={styles.Project}>
							<img src={gitlab} alt="" aria-hidden width="30" />
							<p><a href="https://gitlab.com/stanislavhacker/onp" target="_blank" rel="noopener noreferrer">ONP</a> - Text diff algorithm based</p>
						</div>
						<div className={styles.Project}>
							<img src={gitlab} alt="" aria-hidden width="30" />
							<p><a href="https://gitlab.com/stanislavhacker/envfull" target="_blank" rel="noopener noreferrer">envfull</a> - Parsing and working with command line arguments, env and .env file, config file.</p>
						</div>

						<div className={styles.Project}>
							<img src={github} alt="" aria-hidden width="20" />
							<p><a href="https://github.com/sharespace/EventEmitter" target="_blank" rel="noopener noreferrer">EventEmitter</a> - Message queue for events.</p>
						</div>
						<div className={styles.Project}>
							<img src={github} alt="" aria-hidden width="20" />
							<p><a href="https://github.com/sharespace/ShortcutManager" target="_blank" rel="noopener noreferrer">ShortcutManager</a> - Manager for shortcuts in web application.</p>
						</div>

                    </>
                )}
            </LocalesContext.Consumer>
		</Page>
	);
};

export default Home;
