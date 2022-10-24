<template>
    <footer>
        <SocialComp />
    </footer>
</template>

<script>
import SocialComp from '../SocialComp/SocialComp';
export default {
    name: "FooterComp",
    props: [],
    components: { SocialComp }
};
</script>

<style scoped lang="scss">
$footer-outer-height: 110px;
$footer-inner-height: 70px;
$footer-height-difference: calc($footer-outer-height - $footer-inner-height);
$footer-bg: #fff;

footer {
    min-height: 90px;
    /* Make it stick */
    height: $footer-outer-height;
    position: sticky;
    top: calc($footer-height-difference * -1);
    /* Multiply by -1 to get a negative value */
    display: flex;
    align-items: center;

    /* Other */
    background-color: $footer-bg;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    justify-content: center;
}
</style>