<script>
    import { Card, Carousel } from "flowbite-svelte";

    import placeholder from "$lib/images/FullSizeRender.png"

    let showThumbs=false
    let showCaptions=false

  export const images = [
  {
    id: 0,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 1,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 2,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 3,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 4,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 5,
    name: "Cosmic timetraveler",
    imgurl: placeholder,
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
];
</script>


<div class="max-w-4xl mx-auto py-10">
    <div class="text-3xl text-orange-500 text-center py-5">Highlighted project</div>
    <Carousel {images} {showThumbs} {showCaptions}/>
</div>
<Card padding="none" size="xl" class="grid md:grid-cols-2">
    <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <img src={placeholder} alt="Placeholder"/>
        <h3 class="py-4 text-lg font-semibold text-gray-900 dark:text-white">This would be the alt title</h3>
    </figure>
    <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <img src={placeholder} alt="Placeholder"/>
        <h3 class="py-4 text-lg font-semibold text-gray-900 dark:text-white">This would be the alt title</h3>
    </figure>
    <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <img src={placeholder} alt="Placeholder"/>
        <h3 class="py-4 text-lg font-semibold text-gray-900 dark:text-white">This would be the alt title</h3>
    </figure>
    <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <img src={placeholder} alt="Placeholder"/>
        <h3 class="py-4 text-lg font-semibold text-gray-900 dark:text-white">This would be the alt title</h3>
    </figure>
  </Card>