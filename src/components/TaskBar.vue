<template>
    <div class="task-bar w-full bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center z-40 relative">

        <div class="flex gap-2 p-1">
            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto" v-for="(item, index) in items" :key="index" @click="item.action(); openApp(item.name)">
                <img class="transform active:scale-75 duration-150 px-1.5 py-1" :src="item.icon" width="34">
            </button>
        </div>

        <div class="flex absolute right-0 bottom-0 h-full md:flex">
            <div class="inline-flex justify-center items-center w-8 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 10px; height: 10px;">
                    <path fill="currentColor" :class="{ 'text-white': darkMode }" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                </svg>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full">
                <img width="16" src="@/assets/ui/battery.png" :class="{ 'filter invert': darkMode }"/>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full">
                <img width="22" src="@/assets/ui/audio.png" :class="{ 'filter invert': darkMode }"/>
            </div>
            <div class="flex flex-col text-xs justify-center items-center px-2 hover:bg-gray-300 dark:hover:bg-gray-700 duration-150" :class="{ 'text-white': darkMode}" @click="toggleCalendar()">
                <span>{{ today.time }}</span>
                <span>{{ today.date }}</span>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full hover:bg-gray-300 dark:hover:bg-gray-700 duration-150" @click="toggleNotificationCenter()">
                <img width="16" src="@/assets/ui/notification-center.png" :class="{ 'filter invert': !darkMode }"/>
            </div>
            <div class="h-full w-2 border-l border-gray-300 dark:border-gray-600 ml-2"></div>
        </div>

    </div>
</template>

<script>
import Utils from '@/store/utils.js'
import {mapState} from 'vuex'

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default {
    name: 'TaskBar',
    computed: {
        ...mapState({
            darkMode: state => state.darkMode
        }),
        items() {
            let iconTheme = this.darkMode ? 'light' : 'dark'
            return [
                { name: 'start', icon: Utils.getImageUrl('start'), action: this.toggleStartMenu },
                { name: 'search', icon: Utils.getImageUrl('search-' + iconTheme), action: this.none },
                // { name: 'widget', icon: Utils.getImageUrl('widget'), action: this.none },
                { name: 'settings', icon: Utils.getImageUrl('settings'), action: this.none },
                { name: 'explorer', icon: Utils.getImageUrl('explorer'), action: this.none },
                { name: 'edge', icon: Utils.getImageUrl('edge'), action: this.none },
                { name: 'store', icon: Utils.getImageUrl('store-' + iconTheme), action: this.none },
                { name: 'vscode', icon: Utils.getImageUrl('vscode'), action: this.none },
            ]
        }
    },
    data() {
        return {
            today: {},
        }
    },
    methods: {
        updateTime() {
            this.today = {
                date: dayjs().format('YYYY-MM-DD'),
                time: dayjs().format('A HH:mm')
            }
        },
        toggleStartMenu() {
            this.$store.dispatch('toggleStartMenu')
        },
        toggleCalendar() {
            this.$store.dispatch('toggleCalendar')
        },
        toggleNotificationCenter() {
            this.$store.dispatch('toggleNotificationCenter')
        },
        none() {},
        openApp(appName) {
            if (this.$store.state.apps[appName]) {
                if (this.$store.state.apps[appName].isActive) {
                    this.$store.state.apps[appName].isMinimized = !this.$store.state.apps[appName].isMinimized
                } else {
                    this.$store.state.apps[appName].isMinimized = false
                    this.$store.state.apps[appName].isActive = true
                }
            }
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
    }
}
</script>

<style scoped>

.task-bar {
    height: 40px;
}

</style>