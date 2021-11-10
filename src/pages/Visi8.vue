<template>
    <div  style="background-color: #121a3f" class="pt-5 h-content">
        <div>
            <div class="flex items-center justify-center">
                <img :src=logo class="w-28 pb-3" />
            </div>
        </div>

        <hr class="ml-5 mr-5" />

        <div class="p-5 text-white text-2xl">
            <p>WHO <strong>WE ARE ?</strong></p>
        </div>

        <hr class="ml-5 w-48 border-4" />

        <div class="p-5 text-justify text-white">
            <p>
                <strong class="text-lg">Visi 8</strong> is a digital content startup, building a library
                of original Intellectual Properties (IP) based on Southeast Asian
                lores, espicially Indonesia. We were established in mid 2020 in Jakarta.
                We primarily tell stories using 3D animation and Computer
                Generated Imagery (CGI) along with AR and VR technollogies which we
                develop ourselves with our in-house programmers. We believe
                that these current ways of storytelling will have a greater role in
                the global film industry moving forward
            </p>
        </div>

        <div style="background-color: #b4d434;">
            <p class="text-white text-center py-3 text-4xl font-bold">What We Do ?</p>
        </div>

        <div class="text-white">
            <div class="mt-5 grid sm:grid-cols-5 sm:grid-flow-col">
                <div class="w-full col-span-3">
                    <div class="rounded-tr-lg rounded-br-lg pr-5 pt-2 h-10 w-48" style="background-color: #b4d434;">
                        <p class="text-right pr-5 text-xl font-bold">3D</p>
                    </div>
                    <p class="p-5 text-justify">
                        <strong>Visi 8</strong> is currently making a 3D animated feature film
                        called Kara Guardian of the Realms that tells story about the mystical
                        adventure of a young girl chosen to be the guardian of the realms in Terra.
                        She embarks on a journey together with an overzealous scarecrow, a kind tree spirit
                        and two human space-time explorers.
                        <br /><br />
                        Currently, we are working on a feature animation and VFX support for several
                        films. At the same time, our services cover new media projects such as AR and VR 
                        from both the private and publis sector. We also offer programming support for clients
                        who need mobile apps and websited. We are also developing out own IPs which focus on original
                        stories from and about Indonesia.
                    </p>
                </div>
                <img class="col-span-2 sm:h-full w-full object-contain" :src=threeD />
            </div>
        </div>

        <div class="text-white my-12">
            <div class="mt-5 grid sm:grid-cols-5 sm:grid-flow-col">
                 <img class="col-span-3 pb-5 sm:h-full w-full object-contain" :src=AR />
                <div class="w-full col-span-2">
                    <div class="flex justify-end">
                        <div class="rounded-tl-lg rounded-bl-lg pr-5 pt-2 h-10 w-48" style="background-color: #b4d434;">
                            <p class="text-left pl-5 text-xl font-bold">AR</p>
                        </div>
                    </div>
                    <p class="p-5 text-justify">
                        <strong>Visi 8</strong> is already embracing the ever expanding media landscape.
                        Increasing number of media contents are now being presented in many
                        creative ways using VR and AR. At Visi 8, we have the technology and human
                        resources to research and develop VR and AR projects tailored to our client's needs.
                    </p>
                </div>
            </div>
        </div>

        <hr class="ml-5 mr-5 border-4" />

        <div>
            <div class="px-4 pb-5">
                <p style="color: white; text-align: center" class="text-4xl font-bold mt-5">Our Team</p>
                <div class="flex items-start justify-start mt-3 divide-x">
                    <img class="mt-7" :src="founder1" style="border-radius: 50%; height: 100px; width: 100px;" />
                    <p class="text-white my-7 mx-5 pl-5">
                        <strong class="text-lg">Raiyan Laksamana</strong>
                        <br />
                        Chief Executive Officer
                        <br />
                        Raiyan has been working in the CG Industry for the last two decades
                        in Indonesia and Japan. Raiyan is one of the founders of both Visi 8
                        Studio and its sister company, Imagia Studio.
                    </p>
                </div>
                <div class="flex items-start justify-start mt-3 divide-x">
                    <img class="mt-7" :src="founder2" style="border-radius: 50%; height: 100px; width: 100px;" />
                    <p class="text-white my-7 mx-5 pl-5">
                        <strong class="text-lg">Farid Siddik</strong>
                        <br />
                        Business Development Director
                        <br />
                        Farid has had a 5 year experience in strategy consulting
                        with PricewaterhouseCoopers in Indonesia and the Middle East.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
   name: 'fabelio',
   data: function () {
      return {
          logo: require('../assets/images/visi8/Logo.png'),
          threeD: require('../assets/images/visi8/3D.png'),
          AR: require('../assets/images/visi8/AR.png'),
          founder1: require('../assets/images/visi8/CEO.png'),
          founder2: require('../assets/images/visi8/BDD.png'),
      }
    }
}
</script>