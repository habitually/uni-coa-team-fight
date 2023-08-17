<template>
    <view class="contain">
        <view class="con">
            <view class="content">
                <!-- <view class="title text-3xl text-teal-500 my-4"> 选择身份 </view> -->

                <view class="text-white text-3xl">
                    <div class="text-left">
						欢迎使用
						<p>晶核打团助手</p>
					</div>
                </view>

                <view class="btns mt-16">
					<button
					    class="role-bruiser bg-red-600 w-auto rounded-xl text-zinc-50"
					    @click="login"
					>
					    我是打手
					</button>
                    <button
                        class="role-passer btn mt-4 bg-blue-600 w-auto rounded-xl text-zinc-50"
                        @click="login"
                    >
                        我是老板
                    </button>
                </view>

                <!-- <view class="desc">
                    <text>
                        Don't have an account?
                        <text class="text-violet-500"> Sign Up </text>
                    </text>
                </view> -->
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup name="login">
import { reactive } from 'vue';
import { useAuthStore } from '@/state/modules/auth';
import { useRouter } from 'uni-mini-router';
const router = useRouter();
const authStore = useAuthStore();
const form = reactive({
    name: '小团体',
    passWord: '123456',
});

// var name = 12321;

// login登录
function login() {
    authStore.token = '测试';
    router.push({
        name: 'home',
    });
}
</script>

<style lang="scss" scoped>
.contain {
    width: 100%;
    height: 100vh;
    background: url('@/static/image/bg_entry.jpg') no-repeat;
    background-size: cover;
	background-position: center;
	
    .con {
        width: 100%;
        height: 100%;
    

        .content {
            position: absolute;
            top: 40%;
            right: 30rpx;
            left: 30rpx;
            padding: 30rpx;
        }
    }
}
</style>
