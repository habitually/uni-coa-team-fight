<template>
	<vin-noticebar text="等待所有老板在游戏中加入定向匹配" :background="`transparent`" :color="`#D9500B`"></vin-noticebar>
	<view class="box-room">
		<view class="place-breaker flex items-center">
			<view class="mr-8">打手</view>
			<view class="flex justify-between flex-1 mr-2">
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-sm text-center w-full overflow-hidden mt-1">1号打手</view>
				</view>
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-sm text-center w-full overflow-hidden mt-1">2号打手</view>
				</view>
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-sm text-center w-full overflow-hidden mt-1">3号打手</view>
				</view>
				<view class="place-item place-item-status__lock">
					<image class="avatar avatar-room rounded-lg" src="" @click="showPreview = true" />
					<view class="text-sm text-center w-full overflow-hidden mt-1">已锁</view>
				</view>
			</view>
		</view>
		<view class="mt-4 place-passer flex items-center">
			<view class="mr-8">老板</view>
			<view class="flex justify-between flex-1 mr-2">
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-orange-400 text-sm text-center w-full overflow-hidden mt-1">待进房</view>
				</view>
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-orange-400 text-sm text-center w-full overflow-hidden mt-1">已进房</view>
				</view>
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-orange-400 text-sm text-center w-full overflow-hidden mt-1">已进房</view>
				</view>
				<view class="place-item">
					<image class="avatar avatar-room rounded-lg" src="/static/logo.png" @click="showPreview = true" />
					<view class="text-green-500 text-sm text-center w-full overflow-hidden mt-1">已确认</view>
				</view>
			</view>
		</view>

		<view class="mt-4">
			<vin-steps :current="state.current1" @click-step="handleClickStep">
				<vin-step title="加入定向匹配"></vin-step>
				<vin-step title="确认打手"></vin-step>
				<vin-step title="完成"></vin-step>
			</vin-steps>
			<view class="mt-2 text-center">
				<view v-if="state.current1 === 1" class="text-white text-sm">口令: 124244</view>
				<view v-else-if="state.current1 === 2" class="text-white text-sm">
					<view class="text-white text-sm border border-b-4 border-indigo-500 flex flex-col items-center">
						请输入2号打手 的uid:
						<input type="number" class="bg-white text-black w-24 mt-2" maxlength="7" label="文本" />
					</view>
				</view>
				<view v-else-if="state.current1 === 3" class="text-white text-sm">
					<view class="text-white text-sm border border-b-4 border-indigo-500">等待发车</view>
				</view>
			</view>
		
		</view>
		<div class="mt-4 flex justify-center">
			<vin-button v-if="state.current1 === 1" class="mx-2" size="small" type="warning">退出房间</vin-button>
			<vin-button v-else="state.current1 < 3" class="mx-2" size="small" type="warning">上一步</vin-button>
			<vin-button class="mx-2" size="small" type="primary" @tap="handleNext">下一步</vin-button>
		</div>
	</view>
</template>

<script setup lang="ts" name="MyRoom">
import { ref, reactive } from 'vue';

const showPreview = ref(false);

const state = reactive({
	tabValue: '0',
	moqiTypeVisible: false,
	lizhanTypeVisible: false,
	tansouTypeVisible: false,
	daiganTypeVisible: false,
	val: '',
	current1: 1
});

const handleNext = () => {
	if (state.current1 < 3) {
		state.current1++;
	}
}

</script>

<style>
	

</style>
