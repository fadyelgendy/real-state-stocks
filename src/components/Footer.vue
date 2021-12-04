<template>
    <footer class="text-white">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="text-white text-center my-3">NEED HELP GETTING STARTED?</h1>
                    <p class="font-weight-bold text-center">Talk to one of our team members and start building your portfolio
                    </p>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-lg-3 col-md-6">
                    <Picture height="60" class="d-block mx-auto footer_logo" src="./icons/logo_footer.svg" alt="Real Estate logo" />

                    <div class="social_contianer text-center my-5 d-flex justify-content-center align-items-center ">
                        <div class="icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="icon mx-4">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6">
                    <h4 class="p-2 border-bottom border-2">Home</h4>
                    <div class="footer_links">
                        <a href="#">Properties</a>
                        <a href="#">HOW IT WORKS</a>
                        <a href="#">Our message</a>
                        <a href="#">Our Advantages</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6">
                    <h4 class="py-2">
                        <span class="border-bottom border-2 py-2">latest news</span>
                    </h4>
                    <h5 class="py-3">Subscribe to get the latest news and developments to invest in real estate</h5>

                    <div class="newsletter">
                        <form>
                            <input type="text" placeholder="Your E-mail">
                            <button>subscribe</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6">
                    <h4 class="p-2 border-bottom border-2">call us</h4>
                    <div class="footer_links">
                        <a href="#">info@res.sa.com</a>
                        <a href="#">+966552389207</a>
                        <a href="#">Kingdom Saudi Arabia</a>
                    </div>
                </div>
            </div>
        </div>
        <p class="copy_right">&copy; 2021 <span>Real Estate Stocks</span> &reg; | All rights reserved</p>
    </footer>
</template>

<script>
import Picture from "./core/Picture.vue"
export default {
    name: "Footer",
    components: {
        Picture
    }
}
</script>