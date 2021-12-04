<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid px-5">
        <div class="navbar-brand" href="#">
            <Picture src="./icons/logo.svg" alt="Real Estate logo" />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">my investment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Opportunities available</a>
                </li>
            </ul>

            <div class="mr-auto d-flex justify-content-between pt-3">
                <div class="d-flex align-items-center mx-2 learn">
                    <a href="#">learn</a>
                    <span class="learn_box mx-1"></span>
                </div>
                <div id="language">
                    <div id="language_switcher" class="d-flex justify-content-between w-100">
                        <a href="#">
                            <Picture src="./icons/saudi_arabia.svg" alt="saudi arabia flag" />
                            <span class="hidden-sm hidden-lg">SAR</span>
                        </a>
                        <Picture id="lang_swtich_btn" class="drop_menu_btn" data-target="lang_switch_body" src="./icons/arrow _down .svg" alt="down arrow" />
                    </div>
                    <div id="lang_switch_body">
                        <a href="#">
                            <Picture class="ml-5" src="./icons/Flag_of_the_United_States.svg" alt="USA flag" />
                            <span class="hidden-sm hidden-lg">USD</span>
                        </a>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="navbar_icons d-flex justify-content-between
                ">
                    <Picture class="mx-2" src="./icons/bell.svg
                    " alt="bell icon" />
                    <Picture src="./icons/heart.svg
                    " alt="hear icon" />
                </div>

                <div class="d-flex justify-content-between mx-2">
                    <Picture class="mx-2 drop_menu_btn" src="./icons/arrow _down .svg" alt="user menu button" id="user_menu_btn drop_menu_btn" data-target="user_menu_body" />

                    <div>
                        <p class="username hidden-sm">ahmed mezied</p>
                        <ul class="list-group" id="user_menu_body">
                            <li class="list-group-item">profile</li>
                            <li class="list-group-item">logout</li>
                        </ul>
                    </div>
                    <div class="user_avatar hidden-xsm"></div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import Picture from "./core/Picture.vue"

export default {
    name: 'Header',
    components: {
        Picture
    }
}
</script>
