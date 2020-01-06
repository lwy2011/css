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

        &:active {
            background-color: white;
        }

        &:hover {
            background-color: var(--button-hover-bg-color);
        }

        &:focus {
            outline: none;
        }

        cursor: pointer;
        display: inline-flex;
        transition: all .5s linear;
    }
</style>