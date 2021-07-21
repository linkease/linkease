<template>
    <div id="main" class="desktop">

    </div>
</template>

<script>

export default {

}
</script>
<style lang="scss" scoped>
#main * {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: 0;
}
#main {
    width: 100%;
    position: relative;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 719px) {
    #main {
        display: none;
    }
}
@media screen and (max-width: 1440px) {
    #main {
    }
}
@media screen and (max-width: 1024px) {
    #main {
    }
}
</style>