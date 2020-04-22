<template>
    <div style="margin:1em;">
        <y-date-picker :value="date" @select="date=$event">
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
            };
        }
    };
</script>

