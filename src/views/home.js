import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header className="home-header10">
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo1">
            <span>PotPots</span>
            <br></br>
          </span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          ></div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials1">
              <button className="social button">
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image10"
                  />
                </a>
              </button>
              <a
                href="https://example.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                </svg>
              </a>
            </div>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view1 button"
            >
              Shop Now
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button1">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container2">
                <span className="home-logo2">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text12">About</span>
                <span className="home-text13">Features</span>
                <span className="home-text14">Pricing</span>
                <span className="home-text15">Team</span>
                <span className="home-text16">Blog</span>
              </nav>
              <div className="home-container3">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon20">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <section className="home-hero">
        <div className="home-heading1">
          <h1 className="home-header11">
            <span>Welcome to PotPots!</span>
            <br></br>
          </h1>
          <p className="home-caption10">
            <span>
              Discover PotPots, your go-to destination for innovative, multi-use
              storage solutions. Our collection features uniquely designed pots
              crafted from a variety of premium materials, including glass and
              plastic. Whether you&apos;re looking for stylish storage options
              or versatile containers for various needs, PotPots has the perfect
              solution for you!
            </span>
            <br></br>
          </p>
        </div>
        <div className="home-buttons">
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-view2 button"
          >
            Shop Now
          </a>
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-learn1 button-clean button"
          >
            Learn more
          </a>
        </div>
      </section>
      <section className="home-description10">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container4">
          <div className="home-description11">
            <div className="home-content10">
              <p className="home-paragraph1">
                <span>Our Multi-Use Pots</span>
                <br></br>
              </p>
              <p className="home-paragraph2">
                <span>
                  Our pots are designed to be more than just containers—they’re
                  multifunctional marvels. Perfect for a range of uses, from
                  storing small items to serving as elegant decor pieces, our
                  pots adapt to your needs with flair.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-links1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12 button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
              <a
                href="https://example.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13 button-link button"
              >
                <span>Join us on Telegram</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <p className="home-paragraph3">
          <span>Why Choose PotPots?</span>
          <br></br>
        </p>
        <div className="home-row1">
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link14"
          >
            <div className="home-card10">
              <div className="home-avatar1">
                <img
                  alt="image"
                  src="/Avatars/avatar.svg"
                  className="home-avatar2"
                />
              </div>
              <div className="home-main1">
                <div className="home-content11">
                  <h2 className="home-header12">
                    <span>Glass Pots</span>
                    <br></br>
                  </h2>
                  <p className="home-description12">
                    <span>
                      Sophisticated and durable, our glass pots are ideal for
                      those who appreciate both form and function. Their sleek
                      design makes them a chic addition to any space while
                      offering reliable storage.
                    </span>
                    <br></br>
                  </p>
                </div>
                <button className="home-learn2 button">
                  <span className="home-text33">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image11"
                  />
                </button>
              </div>
            </div>
          </a>
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link15"
          >
            <div className="home-card11">
              <div className="home-avatar3">
                <img
                  alt="image"
                  src="/Avatars/default-avatar.svg"
                  className="home-avatar4"
                />
              </div>
              <div className="home-main2">
                <div className="home-content12">
                  <h2 className="home-header13">
                    <span>Plastic Pots</span>
                    <br></br>
                  </h2>
                  <p className="home-description13">
                    <span>
                      Lightweight yet sturdy, our plastic pots are perfect for
                      those seeking versatility and ease of use. Available in
                      various colors, designs and sizes, they seamlessly fit
                      into any setting.
                    </span>
                    <br></br>
                  </p>
                </div>
                <button className="home-learn3 button">
                  <span className="home-text38">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image12"
                  />
                </button>
              </div>
            </div>
          </a>
        </div>
        <a
          href="https://example.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link16"
        >
          <div className="home-card12">
            <div className="home-avatar5">
              <img
                alt="image"
                src="/Avatars/light-avatar.svg"
                className="home-avatar6"
              />
            </div>
            <div className="home-row2">
              <div className="home-main3">
                <div className="home-content13">
                  <h2 className="home-header14">
                    <span>And Much more</span>
                    <br></br>
                  </h2>
                  <p className="home-description14">
                    <span>
                      We use only the finest materials to ensure each pot is
                      both durable and stylish. Our rigorous quality checks
                      guarantee that you receive products that meet our high
                      standards.
                    </span>
                    <br></br>
                  </p>
                </div>
                <button className="home-learn4 button">
                  <span className="home-text43">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image13"
                  />
                </button>
              </div>
              <img
                alt="image"
                src="/group%202262.svg"
                className="home-image14"
              />
            </div>
          </div>
        </a>
      </section>
      <section className="home-collection1">
        <div className="home-content14">
          <span className="home-caption11">collection</span>
          <div className="home-heading2">
            <h2 className="home-header15">
              <span>Innovative Design</span>
              <br></br>
            </h2>
            <p className="home-header16">
              <span>
                Our team is dedicated to crafting pots that are both functional
                and visually appealing. From contemporary styles to classic
                designs, we have something for everyone.
              </span>
              <br></br>
            </p>
          </div>
        </div>
        <div className="home-main4">
          <div className="home-card13">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link17"
            >
              <div className="home-image15">
                <img
                  alt="image"
                  src="/Characters/character-1.svg"
                  className="home-image16"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link18"
            >
              <div className="home-content15">
                <span className="home-caption12">Item #1</span>
                <h3 className="home-title10">£15.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card14">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link19"
            >
              <div className="home-image17">
                <img
                  alt="image"
                  src="/Characters/character-2.svg"
                  className="home-image18"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link20"
            >
              <div className="home-content16">
                <span className="home-caption13">Item #2</span>
                <h3 className="home-title11">£16.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card15">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link21"
            >
              <div className="home-image19">
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image20"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link22"
            >
              <div className="home-content17">
                <span className="home-caption14">Item #3</span>
                <h3 className="home-title12">£20.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card16">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link23"
            >
              <div className="home-image21">
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image22"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link24"
            >
              <div className="home-content18">
                <span className="home-caption15">
                  <span>Item #4</span>
                  <br></br>
                </span>
                <h3 className="home-title13">£9.20</h3>
              </div>
            </a>
          </div>
          <div className="home-card17">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link25"
            >
              <div className="home-image23">
                <img
                  alt="image"
                  src="/Characters/character-5.svg"
                  className="home-image24"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link26"
            >
              <div className="home-content19">
                <span className="home-caption16">Item #5</span>
                <h3 className="home-title14">£12.10</h3>
              </div>
            </a>
          </div>
          <div className="home-card18">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link27"
            >
              <div className="home-image25">
                <img
                  alt="image"
                  src="/Characters/character-6.svg"
                  className="home-image26"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link28"
            >
              <div className="home-content20">
                <span className="home-caption17">Item #6</span>
                <h3 className="home-title15">£12.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card19">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link29"
            >
              <div className="home-image27">
                <img
                  alt="image"
                  src="/Characters/character-7.svg"
                  className="home-image28"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link30"
            >
              <div className="home-content21">
                <span className="home-caption18">Item #7</span>
                <h3 className="home-title16">£20.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card20">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link31"
            >
              <div className="home-image29">
                <img
                  alt="image"
                  src="/Characters/character-8.svg"
                  className="home-image30"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link32"
            >
              <div className="home-content22">
                <span className="home-caption19">Item #8</span>
                <h3 className="home-title17">£12.10</h3>
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://example.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-view3 button-link button"
        >
          View all
        </a>
      </section>
      <section className="home-collection2">
        <div className="home-content23">
          <span className="home-caption20">collection</span>
          <div className="home-heading3">
            <h2 className="home-header17">
              <span>Special Offers</span>
              <br></br>
            </h2>
            <p className="home-header18">
              <span>
                Don’t miss out on our special promotions and discounts. Check
                out our latest offers and take advantage of savings on your
                favorite pots.
              </span>
              <br></br>
            </p>
          </div>
        </div>
        <div className="home-main5">
          <div className="home-card21">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link33"
            >
              <div className="home-image31">
                <img
                  alt="image"
                  src="/Characters/character-1.svg"
                  className="home-image32"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link34"
            >
              <div className="home-content24">
                <span className="home-caption21">Item #1</span>
                <h3 className="home-title18">£8.99</h3>
              </div>
            </a>
          </div>
          <div className="home-card22">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link35"
            >
              <div className="home-image33">
                <img
                  alt="image"
                  src="/Characters/character-2.svg"
                  className="home-image34"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link36"
            >
              <div className="home-content25">
                <span className="home-caption22">Item #2</span>
                <h3 className="home-title19">£10.00</h3>
              </div>
            </a>
          </div>
          <div className="home-card23">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link37"
            >
              <div className="home-image35">
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image36"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link38"
            >
              <div className="home-content26">
                <span className="home-caption23">Item #3</span>
                <h3 className="home-title20">£8.99</h3>
              </div>
            </a>
          </div>
          <div className="home-card24">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link39"
            >
              <div className="home-image37">
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image38"
                />
              </div>
            </a>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link40"
            >
              <div className="home-content27">
                <span className="home-caption24">
                  <span>Item #4</span>
                  <br></br>
                </span>
                <h3 className="home-title21">£5.00</h3>
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://example.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-view4 button-link button"
        >
          View all
        </a>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content28">
            <span className="home-caption25">Project</span>
            <div className="home-heading4">
              <h2 className="home-header19">
                <span>Eco-Friendly Options</span>
                <br></br>
              </h2>
              <p className="home-header20">
                <span>
                  We prioritize sustainability. Our eco-friendly pots are made
                  from recycled materials and are designed to be reused and
                  repurposed.
                </span>
                <br></br>
              </p>
            </div>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view5 button-link button"
            >
              <span>Shop Now</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image39"
              />
            </a>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image40" />
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content29">
          <div className="home-main6">
            <div className="home-heading5">
              <h2 className="home-header21">Want to order in bulk?</h2>
              <p className="home-caption26">
                <span>
                  Save more with our bundle deals. Purchase multiple pots and
                  enjoy exclusive discounts on combined orders.
                </span>
                <br></br>
              </p>
            </div>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view6 button"
            >
              Contact Us
            </a>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image41" />
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header22">We have all the answers</h2>
        <div className="home-accordion1">
          <div
            data-role="accordion-container"
            className="home-element1 accordion"
          >
            <div className="home-content30">
              <span className="home-header23">
                <span>1. What are PotPots?</span>
                <br></br>
              </span>
              <span
                data-role="accordion-content"
                className="home-description15"
              >
                <span>
                  PotPots are multi-use containers designed for versatile
                  applications. Made from high-quality materials like glass and
                  more, our pots are perfect for stylish storage, elegant decor,
                  and practical organization.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon22"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon24"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element2 accordion"
          >
            <div className="home-content31">
              <span className="home-header24">
                <span>
                  2. What makes PotPots different from other containers?
                </span>
                <br></br>
              </span>
              <span
                data-role="accordion-content"
                className="home-description16"
              >
                PotPots are designed with versatility in mind, allowing you to
                use them for a variety of purposes. Unlike standard containers,
                our pots feature stylish designs and premium materials like
                glass and plastic, which make them suitable for both functional
                use and decor. Each pot is crafted to blend seamlessly with
                different settings.
              </span>
            </div>
            <div className="home-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon26"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon28"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element3 accordion"
          >
            <div className="home-content32">
              <span className="home-header25">
                <span>
                  3. How do I choose the right type of pot for my needs?
                </span>
                <br></br>
              </span>
              <span
                data-role="accordion-content"
                className="home-description17"
              >
                <span>
                  Consider the purpose and placement of the pot. Glass pots are
                  great for a sophisticated look and displaying contents
                  clearly, while plastic pots are durable and easy to handle for
                  everyday use. Hybrid designs offer a blend of style and
                  practicality. Review the product descriptions and use cases
                  provided on each product page to find the best fit.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon30"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon32"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element4 accordion"
          >
            <div className="home-content33">
              <span className="home-header26">
                <span>
                  4. Do you offer bulk purchasing options or discounts?
                </span>
                <br></br>
              </span>
              <span
                data-role="accordion-content"
                className="home-description18"
              >
                <span>
                  Yes, we offer bulk purchasing options and discounts for larger
                  orders. If you’re interested in buying in bulk or need a
                  custom order, please contact our sales team for more
                  information on pricing and availability. We’ll work with you
                  to meet your specific needs.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon34"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon36"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row3">
          <div className="home-column1">
            <div className="home-card25">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home-image42"
              />
            </div>
          </div>
          <div className="home-column2">
            <div className="home-card26">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image43"
              />
            </div>
          </div>
        </div>
        <div className="home-column3">
          <div className="home-card27">
            <div className="home-content34">
              <h2 className="home-header27">Get yours now</h2>
              <p className="home-description19">
                <span>
                  Click the button below to explore our collection and find the
                  ideal pot for you. Don’t miss out on adding a touch of
                  elegance and practicality to your space.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-button2 button">Shop Now</button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-main7">
          <div className="home-branding">
            <div className="home-heading6">
              <h2 className="home-logo3">Pot Pots</h2>
              <p className="home-caption27">
                PotPots Where Every Pot Finds Its Place!
              </p>
            </div>
            <div className="home-socials2">
              <button className="social button">
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image44"
                  />
                </a>
              </button>
              <a
                href="https://example.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link42"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon38">
                  <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-links2">
            <div className="home-list1">
              <h3 className="home-heading7">PotPots</h3>
              <div className="home-items1">
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link43 button-clean button"
                >
                  About
                </a>
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link44 button-clean button"
                >
                  Collection
                </a>
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link45 button-clean button"
                >
                  Contact Us
                </a>
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link46 button-clean button"
                >
                  Features
                </a>
              </div>
            </div>
            <div className="home-list2">
              <h3 className="home-heading8">Company</h3>
              <div className="home-items2">
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link47 button-clean button"
                >
                  Team
                </a>
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link48 button-clean button"
                >
                  Press
                </a>
                <a
                  href="https://example.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link49 button-clean button"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
          <div className="home-socials3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter3 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image45"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image46"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2024 Pot Pots. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="home-container6">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
