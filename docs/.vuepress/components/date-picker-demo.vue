<template>
    <div style="margin:1em;">
        <y-date-picker :value="date"
                       @select="date=$event"
                       :min-date="min"
                       :max-date="max"
                       @error="onError"
        >
        </y-date-picker>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import '../../helper-icon'
    import YDatePicker from "../../../src/date-picker/date_picker";

    export default {
        components: {
            YDatePicker,
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                date:new Date(),
                min:[1956,3,20],
                max:[2022,4,25]
            };
        },
        methods:{
            onError(msg){
                alert(msg.message)
            }
        }
    };
</script>

