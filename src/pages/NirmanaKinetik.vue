<template>
    <div style="background-color: #363C35;">
        <div>
            <p style="font-family: Ribeye Marrow; color: white; text-align: center; font-size: 50px;">Nirmana Kinetik</p>
        </div>

        <hr style="width:90%"/>

        <iframe style="display: block; margin: 0 auto; margin-top: 70px;" width="750" height="345" :src="iframeSrc1">
        </iframe>
        <iframe style="display: block; margin: 0 auto; margin-top: 70px;" width="750" height="345" :src="iframeSrc2">
        </iframe>
        <iframe style="display: block; margin: 0 auto; margin-top: 70px;" width="750" height="345" :src="iframeSrc3">
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'nirmana-kinetik',
    data(){
        return {
            iframeSrc1: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            iframeSrc2: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            iframeSrc3: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        }
    },
}
</script>