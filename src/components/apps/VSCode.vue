<template>
</template>

<script>
// import VueResizable from 'vue-resizable'
import {mapState} from 'vuex'

export default {
    name: 'VSCode',
    components: {
        // VueResizable
    },
    computed: {
        ...mapState({
            'isActive': state => state.apps.vscode.isActive,
            'isMaximized': state => state.apps.vscode.isMaximized,
            'isMinimized': state => state.apps.vscode.isMinimized,
        })
    },
    data() {
        return {
            top: 50,
            left: 50,
            width: 1100,
            height: 700,
            minWidth: 1100,
            minHeight: 700,
            isDragging: false,
            isResizing: false,
        }
    },
    methods: {
        minimize() {
            this.$store.state.apps.vscode.isMinimized = true
        },
        restore() {
            this.$store.state.apps.vscode.isMaximized = false
        },
        maximize() {
            this.$store.state.apps.vscode.isMaximized = true
        },
        close() {
            this.$store.state.apps.vscode.isActive = false
        },

        dragStart() {
            this.isDragging = true
        },
        dragEnd() {
            this.isDragging = false
        },
        resizeStart() {
            this.isResizing = true
        },
        resizeEnd() {
            this.isResizing = false
        }
    }
}
</script>

<style>

.window {
    box-shadow: 0 4px 15px #0004;
}

.resizable-component {
    position: absolute !important;
}

.minimized {
    opacity: 0;
    transform: translateY(100px);
}

</style>