<template>
    <view class="home-wrap">
        <view class="home-text">Vue 驱动的多端开发框架</view>
        <hello></hello>
        <view class="flex-space-between">
            <view @tap="handleAddTwo"><span>加2</span></view>
            <span>{{rootCount}}</span>
        </view>
        <view class="flex-space-between">
            <view @tap="handleAddOne"><span>加1</span></view>
            <span>{{moduleCount}}</span>
        </view>
    </view>
</template>

<script>
import Hello from '../../components/Hello/Hello';
import {mapState, mapActions} from 'vuex';

export default {
    config: {
        navigationBarTitleText: 'Mars'
    },
    data() {
        return {};
    },
    components: {
        hello: Hello
    },
    mounted() {

    },
    methods: {
        ...mapActions('moduleA', ['addOne']),
        ...mapActions(['addTwo']),
        handleAddOne() {
            this.addOne(1);
        },
        handleAddTwo() {
            let self = this;
            swan.showLoading({
                title: 'loading',
                mask: true,
                success() {
                    self.addTwo().then(() => {
                        swan.hideLoading();
                    });
                },
                fail: function (err) {
                    console.log('showLoading fail', err);
                }
            });
        }
    },
    computed: {
        rootCount() {
            return this.$store.state.count;
        },
        moduleCount() {
            return this.$store.state.moduleA.count;
        }
        // ...mapState({rootCount: state => state.count}),
        // ...mapState({moduleCount: state => state.moduleA.count}),
    },
};

</script>
<style>
.home-wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.home-text {
    font-size: 24px;
    line-height: 1.3;
    color: #6a8bad;
    text-align: center;
}
.flex-space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
}
</style>
