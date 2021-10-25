<template>
    <div  style="background-color: #f8f5e8; h-content">
        <div>
            <div class="flex items-center justify-center">
                <img :src=logo />
            </div>
            <p class="text-center">Fabelio</p>
        </div>

        <hr class="ml-5 mr-5" style="border-color: black;" />

        <div>
            <p class="pl-5 pt-5 text-xl font-bold">Our Products :</p>
            <div class="grid grid-cols-3 sm:grid-cols-4">
                <div class="px-5 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product1">
                                <img style="width: 85px;" :src="product1" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-3 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product2">
                                <img style="width: 85px;" :src="product2" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-1 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product3">
                                <img style="width: 85px;" :src="product3" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>

                <!-- <div class="px-5 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product4">
                                <img style="width: 85px;" :src="product4" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-3 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product5">
                                <img style="width: 85px;" :src="product5" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-1 mt-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product1">
                                <img style="width: 85px;" :src="product1" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block sm:mt-3 md: ml-5">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product1">
                                <img style="width: 85px;" :src="product1" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:block sm:mt-3 md: ml-3">
                    <div class="bg-gray-200 w-max rounded-lg">
                        <div class="pl-3 pr-3 pt-3 pb-3">
                            <router-link to="/scene/company/fabelio/model/product1">
                                <img style="width: 85px;" :src="product1" />
                            </router-link>
                            <button class="mt-3 ml-3 w-16 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                                View AR
                            </button>
                        </div>
                    </div>
                </div> -->
            </div>
            <div>
                <section>
                    <p class="p-5">
                        <strong class="text-2xl">Tentang Kami</strong>
                        <br />
                        <strong class="ml-1">Perkenalkan, kami adalah Fabelio</strong>
                        <br /> <br />
                        Berdiri sejak tahun 2015, kami bergerak di bidang furnitur dan desain interior. Kami menyediakan berbagai furnitur mulai dari furnitur ruang tamu, ruang makan, kamar tidur, ruang kerja, hingga beragam dekorasi rumah. Seluruh furnitur yang kami jual merupakan hasil karya perajin Indonesia dengan material kayu pilihan yang berkualitas premium dengan harga terbaik.
                        <br /><br />
                        Salah satu misi kami adalah mewujudkan surga pada hunianmu. Karenanya, kualitas, kenyamanan, dan kehangatan menjadi fokus dasar dari setiap furnitur yang kami jual. Kami juga bekerja sama dengan para produsen manufaktur lokal kelas atas sehingga mereka dapat menjual produk-produknya di website kami. 
                        Dengan menggabungkan aksen modern dan minimalis, produk yang kami jual memiliki cita estetika yang akan menghangatkan rumahmu. Lebih daripada itu, kami memastikan bahwa furnitur dan produk yang kami jual tak hanya unik secara visual namun juga sepenuhnya fungsional.
                        <br /><br />
                        <strong>Kami berusaha untuk lebih dekat denganmu</strong>
                        <br /><br />
                        Tak hanya berkembang dengan baik dalam ranah online, kami juga berusaha untuk semakin dekat denganmu. 
                        Saat ini kami sudah memiliki puluhan showroom yang tersebar di wilayah Jabodetabek dan Bandung. Ini adalah bukti komitmen kami untuk memberikan pelayanan menyeluruh dan selalu ada untuk memenuhi kebutuhan hunianmu.
                        <br /><br />
                        Mengisi seluruh rumah di Indonesia dengan furnitur Fabelio menjadi misi lainnya yang kami miliki. Kami percaya ada kebahagiaan di tiap sudut hunian, biarkan kami berkarya dan membantumu mengisi sudut kebahagiaan itu. 
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'fabelio',
   data: function () {
      return {
          logo: require('../assets/images/fabelio/logo.png'),
          product1: require('../assets/images/fabelio/product1.png'),
          product2: require('../assets/images/fabelio/product2.png'),
          product3: require('../assets/images/fabelio/product3.png'),
          product4: require('../assets/images/fabelio/product4.png'),
          product5: require('../assets/images/fabelio/product5.png'),
      }
    }
}
</script>