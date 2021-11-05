<template>
    <div style="background-color: black;">
        <div class="header" :style="'background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url(' + redBg + ')'">
            <div class="title-container">
                <div style="margin-top: 20px;">
                    <img :src="logo" />
                </div>
                <div style="margin-left: 20px;">
                    <img :src="textLogo" />
                </div>
            </div>
        </div>

        <div class="mb-4">
            <img class="cover-img" :src="pic1" />
            <p style="color: white; text-align: center" class="mt-6 px-8">
                We staged the first ever “designed-film” using video mapping projection in 
                Indonesia; we used this particular projection technique as our method to know 
                how people will react to a different way of watching film.
            </p>
            <img class="mt-4" style="width: 30%; display: block; margin-left: auto; margin-right: auto;" :src="textLogo" />
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div class="mb-4" style="margin-top: 10%;">
            <img class="cover-img" :src="pic2" />
            <p style="color: white; text-align: center" class="mt-6 px-8">
                Sembilan Matahari specializes in large scale projection mapping events, 
                taking a different view of filmmaking with the approach through the eyes of 
                design thinking in the process. Expanding new territories by “seeing film differently”, 
                we stimulate a bigger impact that will bring people to “see differently through film”
            </p>
            <img style="width: 30%; display: block; margin-left: auto; margin-right: auto;" :src="textLogo" />
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div class="mb-4 pb-4">
            <p class="text-2xl font-bold my-4" style="color: white; text-align: center;">Our Works</p>
            <iframe class="embed-video" :src="iframeSrc1">
            </iframe>
            <iframe class="embed-video" :src="iframeSrc2">
            </iframe>
            <iframe class="embed-video" :src="iframeSrc3">
            </iframe>
            <iframe class="embed-video" :src="iframeSrc4">
            </iframe>
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div class="pb-4">
            <p class="text-2xl font-bold my-4" style="color: white; text-align: center;">Our Awards</p>
            <div>
                <img class="cover-img" :src="award1"/>
                <img class="cover-img" :src="award2"/>
                <img class="cover-img" :src="award3"/>
            </div>
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div class="pb-4">
            <p class="text-2xl font-bold my-4 text-white text-center">Our Founder</p>
            <img :src="founder1" style="height: 100px; width: 150px; display: block; margin-left: auto; margin-right: auto;"/>
            <p style="color: white; text-align: center;" class="mb-12 mt-4"><strong>Adi Panuntun</strong> <br />Founder 9 Matahari</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'matahari',
    data(){
        return {
            logo: require('../assets/images/matahari/logo.png'),
            textLogo: require('../assets/images/matahari/text_logo.png'),
            pic1: require('../assets/images/matahari/pic1.jpg'),
            pic2: require('../assets/images/matahari/pic2.jpg'),
            award1: require('../assets/images/matahari/award1.jpg'),
            award2: require('../assets/images/matahari/award2.jpg'),
            award3: require('../assets/images/matahari/award3.jpg'),
            redBg: require('../assets/images/matahari/red_background.jpg'),
            iframeSrc1: 'https://www.youtube.com/embed/KTHaVCWnAKo',
            iframeSrc2: 'https://www.youtube.com/embed/CKxacX0J-s4',
            iframeSrc3: 'https://www.youtube.com/embed/_Wtuu-8juq4',
            iframeSrc4: 'https://www.youtube.com/embed/nctjD-eg0CQ',
            founder1: require('../assets/images/matahari/founder.png'),
        }
    }
}
</script>

<style scoped>
    .header {
        /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url('../assets/red_background.jpg'); */
        width: 100%;
        background-size: cover;
        color: white;
        height: 200px;
        max-height: 30vh;
    }

    .title-container {
        display: flex;
        /* position: absolute;
        left: 15%;
        top: 10%; */
    }

    .cover-img {
        width: 100%;
    }
    .embed-video{
        display: block; 
        margin: 0 auto; 
        margin-top: 16px; 
        width:100vw;
        height: calc(0.5625 * 100vw);
    }
</style>