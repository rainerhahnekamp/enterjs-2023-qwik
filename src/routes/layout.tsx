import { component$, Slot } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <header id="header">
        <div id="nav">
          <div id="nav-fixed">
            <div class="container">
              <div class="nav-logo">
                <a href="/" class="logo">
                  <img src="./img/logo.png" alt="" />
                </a>
              </div>

              <ul class="nav-menu nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-me">About Me</a>
                </li>
                <li class="cat-3">
                  <a href="/talks">Public Speaking</a>
                </li>

                <li class="cat-1">
                  <a href="/articles">Articles</a>
                </li>
                <li class="cat-2">
                  <a href="/open-source">Open Source</a>
                </li>
                <li class="cat-3">
                  <a href="/videos">Videos</a>
                </li>
              </ul>

              <div class="nav-btns">
                <button class="aside-btn">
                  <i class="fa fa-bars"></i>
                </button>
                <button class="search-btn">
                  <i class="fa fa-search"></i>
                </button>
                <div class="search-form">
                  <input
                    class="search-input"
                    type="text"
                    name="search"
                    placeholder="Enter Your Search ..."
                  />
                  <button class="search-close">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="nav-aside">
            <div class="section-row">
              <ul class="nav-aside-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-me">About Me</a>
                </li>
                <li>
                  <a href="/talks">Public Speaking</a>
                </li>

                <li>
                  <a href="/articles">Articles</a>
                </li>
                <li>
                  <a href="/open-source">Open Source</a>
                </li>
                <li>
                  <a href="/videos">Videos</a>
                </li>
              </ul>
            </div>

            <div class="section-row">
              <h3>Follow us</h3>
              <ul class="nav-aside-social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>

            <button class="nav-aside-close">
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>
      </header>
      <Slot />
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html" class="logo">
                    <img src="./img/logo.png" alt="" />
                  </a>
                </div>
                <ul class="footer-nav">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <div class="footer-copyright">
                  <span>
                    &copy; Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{' '}
                    All rights reserved
                  </span>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6">
                  <div class="footer-widget">
                    <h3 class="footer-title">About Me</h3>
                    <ul class="footer-links">
                      <li>
                        <a href="/about">About Me</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="footer-widget">
                    <h3 class="footer-title">Categories</h3>
                    <ul class="footer-links">
                      <li>
                        <a href="/talks">Public Speaking</a>
                      </li>

                      <li>
                        <a href="/articles">Articles</a>
                      </li>
                      <li>
                        <a href="/open-source">Open Source</a>
                      </li>
                      <li>
                        <a href="/videos">Videos</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="footer-widget">
                <h3 class="footer-title">Subscribe to my Newsletter</h3>
                <div class="footer-newsletter">
                  <form>
                    <input
                      class="input"
                      type="email"
                      name="newsletter"
                      placeholder="EMail"
                    />
                    <button class="newsletter-btn">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
                <ul class="footer-social">
                  <li>
                    <a href="https://twitter.com/rainerhahnekamp">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rainerhahnekamp">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rainerhahnekamp/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@RainerHahnekamp">
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})

export const head: DocumentHead = {}
