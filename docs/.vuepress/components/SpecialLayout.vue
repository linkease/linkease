<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
        <IndexHomeMobile></IndexHomeMobile>

    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#home {
    ::v-deep header.navbar {
        background: none;
        background: rgba(255, 255, 255, 0.5);
        .links {
            background: none;
        }
    }
}
</style>