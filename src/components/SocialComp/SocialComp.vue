<template>
    <nav class="socialnav">
        <ul>
            <li class="socialnav__item"><a href="https://facebook.com/" target="_blank" class="nav-link"><i
                        class="fab fa-facebook-f" alt="facebook link"></i></a></li>
            <li class="socialnav__item"><a href="https://twitter.com/" target="_blank" class="nav-link"><i
                        class="fab fa-twitter" alt="Twitter link"></i></a></li>
            <li class="socialnav__item"><a href="#" target="" class="nav-link"><i class="fab fa-instagram"
                        alt="Instagram link"></i></a></li>
            <li class="socialnav__item"><a href="#" target="" class="nav-link"><i class="fab fa-google-plus-g"
                        alt="Google Plus link"></i></a></li>
            <li class="socialnav__item"><a href="#" target="" class="nav-link"><i class="fas fa-rss" alt="RSS link"></i></a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "SocialComp",
};
</script>

<style scoped lang="scss">
.socialnav {
    max-width: 300px;
    margin: 0px auto 0px;
    background-color: #ffffff;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    &__item {
        display: block;
        flex: 1 1 auto;
        text-align: center;

        a {
            font-size: 1.5em;
            text-decoration: none;
            display: block;
            padding: .5rem 1rem;
            color: #000;
        }
    }
}
</style>
