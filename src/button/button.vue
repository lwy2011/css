<template>
    <button class="yv-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {};

</script>

<style lang="scss">
    .yv-button {
        font-size: var(--font-size);
        border: 1px solid var(--border-color);
        border-radius: var(--button-radius);
        padding: 4px 1em;



        &:hover {
            background-color: var(--border-color);
        }

        &:focus {
            outline: none;
        }
        &:active {
            background-color: white;
        }
        cursor: pointer;
        display: inline-flex;
        transition: all .5s linear;
    }
</style>