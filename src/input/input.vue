<template>
    <div class="yv-wrapper" :class="{error}">
        <input type="text"
               :value="value"
               :readonly="readonly"
               :disabled="disabled"
               :placeholder="placeholder"
               @change="$emit('change',$event)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event)"
               @blur="$emit('blur',$event)"
        >
        <template v-if="error">
            <Icon icon="warn"></Icon>
            <span class="err-msg">
                {{error}}
            </span>
        </template>
    </div>
</template>

<script>
    import Icon from "../svg/svg.vue";

    export default {
        components: {
            Icon
        },
        props: {
            value: String,
            placeholder:String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: String
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-wrapper {
        display: inline-flex;
        align-items: center;
        font-size: $font-size;


        > input {
            height: $input-height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 $middle-padding;
            outline: none;
            cursor: pointer;

            &:hover {
                border-color: $border-hover-color;
            }

            &:focus {
                box-shadow: 0 1px 2px $box-shadow-color;
            }

            &[disabled], &[readonly] {
                cursor: not-allowed;
                background: #eee;
                border-color: #bbb;
                color: #bbb;
            }
        }
        >:not(:last-child) {
            margin-right: $middle-padding;
        }
        &.error {
            > .yv-icon{
                fill:$warn-color;
            }
            > .err-msg {
                color: $warn-color;
            }
        }



        &.success {

        }
    }
</style>