<template>
    <div style="background-color: black;">
        <div class="header" :style="'background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url(' + redBg + ')'"></div>
        <div class="title-container">
            <div style="margin-top: 20px;">
                <img :src="logo" />
            </div>
            <div style="margin-left: 20px;">
                <img :src="textLogo" />
            </div>
        </div>

        <div>
            <img class="cover-img" :src="pic1" />
            <p style="color: white; text-align: center; margin: 50px;">
                We staged the first ever “designed-film” using video mapping projection in 
                Indonesia; we used this particular projection technique as our method to know 
                how people will react to a different way of watching film.
            </p>
            <img style="width: 30%; display: block; margin-left: auto; margin-right: auto;" :src="textLogo" />
        </div>

        <hr />

        <div style="margin-top: 10%;">
            <img class="cover-img" :src="pic2" />
            <p style="color: white; text-align: center; margin: 50px;">
                Sembilan Matahari specializes in large scale projection mapping events, 
                taking a different view of filmmaking with the approach through the eyes of 
                design thinking in the process. Expanding new territories by “seeing film differently”, 
                we stimulate a bigger impact that will bring people to “see differently through film”
            </p>
            <img style="width: 30%; display: block; margin-left: auto; margin-right: auto;" :src="textLogo" />
        </div>

        <hr />

        <div>
            <p style="color: white; font-size: 50px; text-align: center;">Our Reward</p>
            <div>
                <img class="cover-img" :src="award1"/>
                <img class="cover-img" :src="award2"/>
                <img class="cover-img" :src="award3"/>
            </div>
        </div>

        <hr />

        <div>
            <p style="color: white; font-size: 50px; text-align: center;">Our Youtube Channel</p>
            <iframe style="display: block; margin: 0 auto; margin-top: 70px;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="900" height="443" type="text/html" src="https://www.youtube.com/embed/m86cRO0XtOA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><a href="https://youtubeembedcode.com/de/"></a></div></iframe>
            <div>
                <a style="font-size: 30px; border-radius: 10px; padding: 20px; position: absolute; left: 30%; margin-top: 5%;" href="https://www.youtube.com/c/SembilanMatahariChannel/videos">Go To Our Youtube Channel</a>
            </div>
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
        }
    }
}
</script>

<style scoped>
    .header {
        /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url('../assets/red_background.jpg'); */
        width: 100%;
        height: 400px;
        background-size: cover;
        color: white;
    }

    .title-container {
        display: flex;
        position: absolute;
        left: 15%;
        top: 10%;
    }

    .cover-img {
        width: 100%;
    }
</style>