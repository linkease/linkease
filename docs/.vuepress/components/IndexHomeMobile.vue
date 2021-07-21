<template>
    <div id="main" class="mobile">

    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
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
@media screen and (min-width: 719px) {
    #main {
        display: none;
    }
}
#main {
    width: 100%;
    position: relative;
}
</style>