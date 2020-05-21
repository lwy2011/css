<template>
    <div style="margin:1em;">
        <p>href={{url}}</p>
        <ul>
            <li>
                <a href="/#1">#1</a>
            </li>
            <li>
                <a href="/#2">#2</a>
            </li>
            <li>
                <a href="/#3">#3</a>
            </li>
            <li>
                <a href="/#4">#4</a>
            </li>
            <li>
                <a href="/#">#</a>
            </li>
        </ul>
        <y-router hash="1">
            <y-button>
                #1test
                <a href="/components/router.html"></a>
            </y-button>
        </y-router>
        <y-router hash="2">
            <y-button>
                #2test <a href="/components/router.html"></a>
            </y-button>
        </y-router>
        <y-router hash="3">
            <y-button>
                #3test
                <a href="/components/router.html"></a>
            </y-button>
        </y-router>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import Button from "../../../src/button/button.vue";
    import YRouter from "../../../src/router/router";

    export default {
        components: {
            "y-button": Button,
            YRouter
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                url: location.pathname
            };
        },
    };
</script>

