<template>
    <div class="desktop flex flex-col w-full h-full overflow-hidden">
        <Workspace/>
        <TaskBar/>
        <StartMenu @onLogout="$emit('onLogout')"/>
        <Calendar/>
        <NotificationCenter/>
    </div>
</template>

<script>
import Workspace from '@/components/Workspace.vue'
import TaskBar from '@/components/TaskBar.vue'
import StartMenu from '@/components/StartMenu.vue'
import NotificationCenter from '@/components/NotificationCenter.vue'
import Calendar from '@/components/Calendar.vue'

export default {
    name: 'HomePage',
    components: {
        Workspace,
        TaskBar,
        StartMenu,
        Calendar,
        NotificationCenter
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>

.desktop {
    background-image: url('../assets/wallpapers/light.jpg');
    background-position: center;
    background-size: cover;
}

.dark {
    .desktop {
        background-image: url('../assets/wallpapers/dark.jpg');
    }
}

</style>