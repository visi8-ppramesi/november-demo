<template>
    <div style="background-color: #363C35;" class="pb-4">
        <div>
            <p style="font-family: Ribeye Marrow; color: white; text-align: center; font-size: 50px;">Nirmana Kinetik</p>
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div class="px-4">
            <iframe class="embed-video" :src="iframeSrc1">
            </iframe>
            <iframe class="embed-video" :src="iframeSrc2">
            </iframe>
            <iframe class="embed-video" :src="iframeSrc3">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nirmana-kinetik',
    data(){
        return {
            iframeSrc1: 'https://www.youtube.com/embed/uxA2vZ9xJlc',
            iframeSrc2: 'https://www.youtube.com/embed/fFTHKrunpLk',
            iframeSrc3: 'https://www.youtube.com/embed/GTE6iddOm4o',
        }
    },
}
</script>

<style scoped>
    .embed-video{
        display: block; 
        margin: 0 auto; 
        margin-top: 16px; 
        width:calc(100vw - 32px);
        height: calc(0.5625 * (100vw - 32px));
    }
</style>