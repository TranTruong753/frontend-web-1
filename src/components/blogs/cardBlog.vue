<template>
    <!-- col-12 col-lg-4 col-md-6 -->
    <div v-show="cardData.isShow" :class="cardData.styleCss">
        <div class="card-h-100 card border-0">
            <a href="#!"> 
                <img :src="cardData.imgSrc" class="card-img-top img-fluid card-img-height"
                    :alt="cardData.imgAlt">
            </a>
            <div class="card-body">
                <a href="#!" class="text-black">
                    <h5 class="pb-1 card-title truncate-2">
                        {{cardData.name}}
                    </h5>
                </a>
                <p class="card-text truncate-3">
                    {{cardData.description}}
                </p>
                <div class="d-flex align-items-end justify-content-between">
                    <a href="#" class="btn btn-primary">Read more</a>
                    <span class="text-black-50 small">{{cardData.timePost}}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
            required: true,
            default: () => ({
                imgSrc: '',
                imgAlt: 'Default Image',
                name: 'default name',
                description: 'default title',
                timePost: 'Default time post',    
                isSave: false,
                isShow: true,
                styleCss: ''

            })
        }
    }
  
}
</script>