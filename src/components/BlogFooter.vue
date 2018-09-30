<template>
    <footer class="footer">
        <div class="container">
            <div class="row row-lg-eq-height">
                <div class="col-lg-12">
                    <div class="footer_content">
                        <div class="copyright">
                            Copyright &copy; created by <i class="fa fa-heart-o" aria-hidden="true"></i> by duc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
/*********************************
12. Footer
*********************************/

.footer {
  width: 100%;
  background: #1f1f1f;
}
.footer_content {
  padding-top: 50px;
  text-align: center;
  padding-bottom: 17px;
}
.footer_logo a {
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  line-height: 0.75;
}
.footer_social {
  margin-top: 34px;
}
.footer_social ul li {
  display: inline-block;
}
.footer_social ul li:not(:last-child) {
  margin-right: 21px;
}
.footer_social ul li i {
  color: #8f8f8f;
}
.footer_social_facebook:hover i {
  color: #3b5999;
}
.footer_social_twitter:hover i {
  color: #55acee;
}
.footer_social_pinterest:hover i {
  color: #bd081c;
}
.footer_social_vimeo:hover i {
  color: #1ab7ea;
}
.footer_social_instagram:hover i {
  color: #c26d7a;
}
.footer_social_google:hover i {
  color: #dd4b39;
}
.copyright {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.1);
  margin-top: 40px;
}
.subscribe {
  width: 100%;
  height: 100%;
}
.subscribe_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 100%;
  background: #111111;
}
.subscribe_content {
  width: 100%;
  padding-left: 30px;
  padding-right: 15px;
  padding-top: 45px;
}
.subscribe_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 32px;
}
.subscribe_content form {
  position: relative;
  width: 100%;
}
.sub_input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #888888;
  padding-bottom: 9px;
  color: #ffffff;
}
.sub_input::-webkit-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sub_input:-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sub_input::-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sub_input:-ms-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sub_input::input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sub_button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
  background: transparent;
  border: none;
  outline: none;
}
.sub_button svg polygon {
  fill: rgba(255, 255, 255, 0.5);
}
.subscribe_content form:hover .sub_button svg polygon,
.subscribe_content form:focus .sub_button svg polygon {
  fill: #37d27f;
}
.subscribe_content form:hover .sub_input,
.sub_input:focus {
  border-bottom: solid 1px rgba(255, 255, 255, 1);
}
</style>
