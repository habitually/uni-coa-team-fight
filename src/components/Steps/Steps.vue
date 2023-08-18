<template>
	<view class="tf-steps">
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
</template>

<script setup lang="ts" name="tfSteps">
import { defineProps } from 'vue';

interface IItem {
	descript: string;
	
}

const props = defineProps({
	list: [
		
	]
})
</script>

<style lang="scss">

</style>